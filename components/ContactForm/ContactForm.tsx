import { useTranslation } from "next-i18next";
import { useState } from "react";

const ContactForm = () => {
  const { t } = useTranslation();
  const [ user, setUser ] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const reset = () => {
    setUser({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const onSubmit = (e: any) => {
    const abortLongFetch = new AbortController();
    const abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);

    e.preventDefault();

    fetch("/api/contact", {
      signal: abortLongFetch.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((res) => {
      console.log(res.ok);
      if(res.ok){
        clearTimeout(abortTimeoutId);
        return res.json();
      };

      throw new Error('Whoops! Error sending email.');
    }).then((res) => {
      reset();
    }).catch((error) => {
      console.log(error);
    });
  };


  return (
    <form className="form" id="contact-form" onSubmit={onSubmit}>
    <div className="row">
      <div className="col-xl-6">
        <input className="contact__input" type="text" id="name" placeholder={t("contact.name")} value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
      </div>
      <div className="col-xl-6">
        <input className="contact__input" type="email" id="email" placeholder={t("contact.mail")} value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}
          required />
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6">
        <input className="contact__input" type="text" id="phone" name="phone" placeholder={t("contact.phone")} />
      </div>
      <div className="col-xl-6">
        <input className="contact__input" type="text" id="subject" placeholder={t("contact.subject")} value={user.subject} onChange={(e) => setUser({...user, subject: e.target.value})}/>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <textarea className="contact__input contact__input-messege" id="message" value={user.message} onChange={(e) => setUser({...user, message: e.target.value})}
          placeholder={t("contact.message")} required minLength={10}></textarea>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="subs-btn">
          <button className="theme_btn theme_btn_bg btn" type="submit">{t("contact.submit")} <i
            className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  </form>
  )
};

export default ContactForm;