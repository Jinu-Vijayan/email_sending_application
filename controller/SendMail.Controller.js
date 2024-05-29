const nodeMailer = require("nodemailer");


const SendMail = async(req,res) => {

    try{
        
        const transporter = nodeMailer.createTransport({
            host: "0.0.0.0",
            port: 1025,
            secure: false, // Use `true` for port 465, `false` for all other ports
          });
        const {from, to, message, subject} = req.body;
    
        const info = await transporter.sendMail({
            from: from, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            // text: "Hello world?", // plain text body
            html: message, // html body
        });

        res.status(200).json({
            message : `Message send ${info.messageId}`
        })


    }catch(error){

        console.log(error)
        res.status(500).json({
            message : "Internal server error"
        })

    }

}

module.exports = {SendMail};