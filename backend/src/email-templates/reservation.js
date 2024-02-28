// src/email-templates/emailTemplate.js

function reservationEmailTemplate({ name, email, message }) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="cs-CZ">

        <head>
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        </head>
        </div>

        <body class="bg-white" style="margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;padding-left:0.5rem;padding-right:0.5rem">
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:465px;border-width:1px;border-style:solid;border-color:rgb(234,234,234);border-radius:0.25rem;margin-top:40px;margin-bottom:40px;margin-left:auto;margin-right:auto;padding:20px">
            <tbody>
              <tr style="width:100%">
                <td>
                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:32px">
                    <tbody>
                      <tr>
                        <td><img alt="Hospůdka U Ježka" src="https://res.cloudinary.com/patrik-vadura/image/upload/v1709139336/hospudkaujezka/logo_default_ld5sw2.png" style="display:block;outline:none;border:none;text-decoration:none;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto" width="100" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <h1 class="" style="color:rgb(2,73,64);font-size:24px;font-weight:700;text-align:center;padding:0px;margin-top:30px;margin-bottom:30px;margin-left:0px;margin-right:0px">Byla vytvořena nová rezervace od ${name}</h1>
                  <p class="text-black" style="font-size:14px;line-height:20px;margin:16px 0">Jméno: <strong style="color:rgb(2,73,64)">${name}</strong></p>
                  <p class="text-black" style="font-size:14px;line-height:20px;margin:16px 0">Emailová adresa: <a href="mailto:${email}" style="color:rgb(2,73,64);text-decoration:none;font-weight:700;text-decoration-line:none" target="_blank">${email}</a></p>
                  <p class="text-black" style="font-size:14px;line-height:20px;margin:16px 0">Zpráva: <br />${message}</p>
                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center;margin-top:32px;margin-bottom:32px">
                    <tbody>
                      <tr>
                        <td><a href="mailto:${email}" style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;background-color:rgb(2,73,64);border-radius:0.25rem;color:rgb(248,251,239);font-size:12px;font-weight:600;text-decoration-line:none;text-align:center;padding-left:1.25rem;padding-right:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;padding:12px 20px 12px 20px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:18" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Reagovat na rezervaci</span><span><!--[if mso]><i style="letter-spacing: 20px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></td>
                      </tr>
                    </tbody>
                  </table>
                  <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-width:1px;border-style:solid;border-color:rgb(234,234,234);margin-top:26px;margin-bottom:26px;margin-left:0px;margin-right:0px" />
                  <p style="font-size:12px;line-height:24px;margin:16px 0;color:rgb(102,102,102)">Tenhle email byl vygenerován automaticky prostřednictvím webového serveru www.hospudkaujezka.cz. Na tenhle email prosím neodpovídejte.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </body>

      </html>`;
}

module.exports = reservationEmailTemplate;
