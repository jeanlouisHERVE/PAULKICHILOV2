/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';
import './styles.scss';
import contact from './contact.jpg';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const successMessage = () => {
    const formMess = document.querySelector('.form-message');
    formMess.innerHTML = 'Message envoyé ! Nous vous recontacterons dès que possible';
    formMess.style.background = '#00c1ec';
    formMess.style.opacity = '1';
    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000);
  };

  const failMessage = (Errormessage) => {
    const formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = Errormessage;
    formMessage.style.opacity = '1';
    formMessage.style.background = 'rgb(253, 87, 87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('service_to9395a', templateId, variables)
      .then((res) => {
        successMessage();
        setName('');
        setFirstname('');
        setCompany('');
        setPhone('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => failMessage('Une erreur s\'est produite, Veuillez réessayer.'));
  };

  const isEmail = () => {
    const mail = document.getElementById('not-mail');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    }
    else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000)
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback('template_5k1pxsz', {
        name,
        company,
        phone,
        email,
        message,
      });
    }
    else {
      failMessage('Merci de remplir correctement les champs requis *');
    }
  };

  return (
    <form className="contact-form">
      <div className="contact__left--img" style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover', backgroundPosition: '70% 50%' }} />
      <h2>Pour tout renseignement ou demande de devis</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Prénom"
          value={firstname}
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Société"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message" />
    </form>
  );
};

export default ContactForm;
