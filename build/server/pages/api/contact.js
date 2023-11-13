"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 9198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.tsx

async function handler(req, res) {
    res.setHeader("Contact-Type", "application/json");
    const { name, email, subject, message } = req.body;
    return new Promise((resolve, reject)=>{
        const transporter = external_nodemailer_default().createTransport({
            host: process.env.NEXT_EMAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.NEXT_EMAIL_USER,
                pass: process.env.NEXT_EMAIL_PASS
            }
        });
        transporter.sendMail({
            from: email,
            to: process.env.NEXT_EMAIL_USER,
            subject: subject,
            text: message,
            html: `<div>From: ${email}<br/>Name: ${name}<br/>${subject}<br/><p>${message}</p><br/></div>`
        }).then((response)=>{
            res.status(200).json({
                error: false,
                emailSent: true,
                errors: [],
                response
            });
            resolve("Success");
        }).catch((error)=>{
            res.status(500).json({
                error: true,
                emailSent: false,
                errors: [
                    error
                ]
            });
            reject(new Error(error));
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9198));
module.exports = __webpack_exports__;

})();