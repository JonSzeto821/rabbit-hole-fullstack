const {User} = require('../models/users');
const Entry  = require('../models/entries');
const ScraperController = require('./scraper');
var request = require('request');
var cheerio = require('cheerio');

// Post to register a new user
exports.register = function(req, res, next) {
// router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['email', 'password'];
    const missingField = requiredFields.find(field => !(field in req.body));
    console.log(req.body);
    if (missingField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Missing field',
            location: missingField
        });
    }

    const stringFields = ['email', 'password'];
    const nonStringField = stringFields.find(
        field => field in req.body && typeof req.body[field] !== 'string'
    );

    if (nonStringField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Incorrect field type: expected string',
            location: nonStringField
        });
    }

    // If the username and password aren't trimmed we give an error.  Users might
    // expect that these will work without trimming (i.e. they want the password
    // "foobar ", including the space at the end).  We need to reject such values
    // explicitly so the users know what's happening, rather than silently
    // trimming them and expecting the user to understand.
    // We'll silently trim the other fields, because they aren't credentials used
    // to log in, so it's less of a problem.
    const explicityTrimmedFields = ['email', 'password'];
    const nonTrimmedField = explicityTrimmedFields.find(
        field => req.body[field].trim() !== req.body[field]
    );

    if (nonTrimmedField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: 'Cannot start or end with whitespace',
            location: nonTrimmedField
        });
    }

    const sizedFields = {
        email: {
            min: 1
        },
        password: {
            min: 4,
            // bcrypt truncates after 72 characters, so let's not give the illusion
            // of security by storing extra (unused) info
            max: 72
        }
    };
    const tooSmallField = Object.keys(sizedFields).find(
        field =>
            'min' in sizedFields[field] &&
            req.body[field].trim().length < sizedFields[field].min
    );
    const tooLargeField = Object.keys(sizedFields).find(
        field =>
            'max' in sizedFields[field] &&
            req.body[field].trim().length > sizedFields[field].max
    );

    if (tooSmallField || tooLargeField) {
        return res.status(422).json({
            code: 422,
            reason: 'ValidationError',
            message: tooSmallField
                ? `Must be at least ${sizedFields[tooSmallField]
                      .min} characters long`
                : `Must be at most ${sizedFields[tooLargeField]
                      .max} characters long`,
            location: tooSmallField || tooLargeField
        });
    }

    let {email, password } = req.body;
    // Username and password come in pre-trimmed, otherwise we throw an error
    // before this

    return User.find({email})
        .count()
        .then(count => {
            if (count > 0) {
                // There is an existing user with the same username
                return Promise.reject({
                    code: 422,
                    reason: 'ValidationError',
                    message: 'Email already taken',
                    location: 'email'
                });
            }
            // If there is no existing user, hash the password
            return User.hashPassword(password);
        })
        .then(hash => {
            return User.create({
                email,
                password: hash,
            });
        })
        .then(user => {
            return res.status(201).json(user.apiRepr());
        })
        .catch(err => {
            // Forward validation errors on to the client, otherwise give a 500
            // error because something unexpected has happened
            if (err.reason === 'ValidationError') {
                return res.status(err.code).json(err);
            }
            console.log(err);
            res.status(500).json({code: 500, message: 'Internal server error'});
        });
};


//Add Entry
exports.addEntry = function(req, res, next) {
    console.log('sweet potato', req.body, req.body.history.startPage);
    let entry = new Entry(req.body);
    let startTopic = req.body.history.startPage;
    console.log('startTopic', startTopic);

    entry['userId'] = req.user.id;
    entry.save(function(err, doc){
        // console.log('cranberry', doc);
        if(!err){
            let url = `https://en.wikipedia.org/wiki/${startTopic}`;
            // console.log('url', url);
            request(url, function(err, resp, html) {
                if (!err){
                    const $ = cheerio.load(html);

                    let links = [];
                    let keywordArray = [];
                    let uniqueKeywordArray = [];
                    let urlArray = [];
                    let formattedKeyword = [];
                    let formattedVal;

                    $('a').each(function(){ 
                        let str = $(this).attr('href');
                        // console.log('apple', str, typeof str);
                        if(str && str.includes('/wiki/') && !str.includes(':') && !str.includes('.org') && !str.includes('Main_Page') ){
                            str = str.substring(str.indexOf("/wiki") + 1);
                            links.push(str);
                            // console.log('str', str);
                        }
                    });

                    for(let i=0; i < 10; i++){
                        let randNum = Math.floor(Math.random() * links.length);
                        let randLink = links[randNum];
                        keywordArray.push(randLink);
                    }
                    
                    uniqueKeywordArray = [...new Set(keywordArray)];
                    
                    uniqueKeywordArray.slice(0,5).forEach(function(link){
                        let url = `https://en.wikipedia.org/${link}`;
                        request(url, function(err, resp, html) {
                            // console.log('URL CREATED', url);
                        })
                        urlArray.push(url);
                        return urlArray;
                    });
                    
                    //trim uniqueKeywordArray to remove space and convert special char from keywords
                    uniqueKeywordArray.slice(0,5).forEach(function(str){
                        formattedVal = str.toLowerCase().replace('wiki/','').split('_').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '); //update to capitalize first letter each word
                        formattedKeyword.push(formattedVal);
                    });

                    // console.log('keywordArray', keywordArray);
                    // console.log('uniqueKeywordArray', uniqueKeywordArray);
                    // console.log('urlArray', urlArray);
                    // console.log('formattedKeyword', formattedKeyword);

                    return res.json({
                       data: doc,
                       keywords: formattedKeyword,
                       links: urlArray
                    });   
                } 
            });     
        }
    });
    
};


function getWikiKeyword() {

}



