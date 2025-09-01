const Contact = require("../models/contact.model");
const transporter = require("../services/mail.service");

const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to load contacts",
    });
  }
};

// save the contact details in the database
const register = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // check if email already exists
    const existingContact = await Contact.findOne({ email: email });
    if (existingContact) {
      return res.status(409).json({
        // 409 Conflict
        success: false,
        message: "This email is already registered with us.",
      });
    }

    const contact = new Contact({ name, email, mobile, message });
    await contact.save();

    //send mail
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL_ID, // authenticated sender
      replyTo: email, // user's email for replies
      to: process.env.GOOGLE_EMAIL_ID,
      subject: "New Contact Form Submission",
      html: `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>New Contact Form Submission</title>
          </head>
          <body style="Margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#333;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center" style="padding:32px 16px;">
                  <!-- Container -->
                  <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;box-shadow:0 10px 30px rgba(16,24,40,0.08);overflow:hidden;">
                    <!-- Header -->
                    <tr>
                      <td style="background:linear-gradient(90deg,#4f46e5,#06b6d4);padding:24px 28px;">
                        <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:0.2px;">New Contact Form Submission</h1>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:24px 28px;">
                        <p style="margin:0 0 16px 0;font-size:14px;color:#374151;">
                          You have received a new message via the contact form. Below are the details:
                        </p>

                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:12px;border-collapse:separate;border-spacing:0 12px;">
                          <tr>
                            <td style="padding:14px;background:#f8fafc;border-radius:8px;border:1px solid #eef2f7;">
                              <strong style="display:block;font-size:13px;color:#0f172a;margin-bottom:6px;">Name</strong>
                              <div style="font-size:15px;color:#111827;">${name}</div>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:14px;background:#f8fafc;border-radius:8px;border:1px solid #eef2f7;">
                              <strong style="display:block;font-size:13px;color:#0f172a;margin-bottom:6px;">Email</strong>
                              <div style="font-size:15px;color:#111827;">${email}</div>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:14px;background:#f8fafc;border-radius:8px;border:1px solid #eef2f7;">
                              <strong style="display:block;font-size:13px;color:#0f172a;margin-bottom:6px;">Mobile</strong>
                              <div style="font-size:15px;color:#111827;">${mobile}</div>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:14px;background:#fff7ed;border-radius:8px;border:1px solid #ffedd5;">
                              <strong style="display:block;font-size:13px;color:#7c2d12;margin-bottom:6px;">Message</strong>
                              <div style="font-size:15px;color:#92400e;white-space:pre-wrap;line-height:1.45;">${message}</div>
                            </td>
                          </tr>
                        </table>

                        <!-- Optional action -->
                        <div style="margin-top:20px;">
                          <a href="mailto:${email}" style="display:inline-block;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;background:linear-gradient(90deg,#4f46e5,#06b6d4);color:#fff;">
                            Reply to Sender
                          </a>
                        </div>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#fbfdff;padding:16px 28px;border-top:1px solid #eef2f7;text-align:center;">
                        <small style="color:#6b7280;font-size:12px;">
                          This email was generated by your portfolio/contact form. — Do not reply to system messages.
                        </small>
                      </td>
                    </tr>
                  </table>
                  <!-- /Container -->
                </td>
              </tr>
            </table>
          </body>
        </html>
        `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Your request has been sent successfully.",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "OOPS! Unable to send query. Please try again after sometime",
    });
  }
};

module.exports = { register, getAll };
