import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    topic: "",
    number: "",
    subject: "",
    message: "",
  });

  axios.defaults.withCredentials = true;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    
    try {
      let data = await axios.post(`https://deploy-mern-server-eight.vercel.app/collection`, inputData, {
        withCredentials: true,
      });
      console.log("Response:" + data);
      alert("Form submitted successfully");
      setInputData({
        name: "",
        email: "",
        topic: "",
        number: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const { name, email, number, subject, message } = inputData;

  return (
    <div>
      <section className="background-banner">
        <div className="contact-banner">
          <div className="details-content">
            <div className="text-para">
              <p>
                Please complete the form below and we will get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="form-container">
          <div className="layout-container">
            <form className="container-form" onSubmit={handleFormSubmit}>
              <div className="col-lg-1">
                <div className="input_text">
                  <input
                    type="text"
                    placeholder="Name*"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <select name="Select Role">
                    <option value="">Select Topic</option>
                    <option value="">Software Development</option>
                    <option value="">Software Testing</option>
                    <option>IT Skills Enhancement</option>
                    <option>IT consultant</option>
                    <option>Carrear Opportunity</option>
                    <option>Other Topic</option>
                  </select>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <input
                    type="text"
                    placeholder="subject *"
                    name="subject"
                    value={subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write a Message..."
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="btn_submit_detail" onClick={handleFormSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="table-container">
            <table cellPadding="20px">
              <tbody>
                <tr>
                  <td className="td-lg-1">Contact Us By Phone</td>
                  <td style={{ color: "orange", fontWeight: "bold" }}>
                    <BsFillTelephoneFill style={{ color: "orange" }} />{" "}
                    8310338347
                  </td>
                </tr>
                <tr>
                  <td className="td-lg-1">Number Or Email Address</td>
                  <td style={{ color: "orange", fontWeight: "bold" }}>
                    <MdOutlineEmail /> ramakrishna.urankar@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
