import React from "react";
import "./Learn.css";

const Learn = () => {
  return (
    <div className="learnBox">
      <p className="learn-head">What is COVID-19?</p>
      <p className="learn-body">
        <li>
          Coronaviruses (CoV) are a large family of viruses that cause illness
          ranging from the common cold to more severe diseases such as Middle
          East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory
          Syndrome (SARS-CoV).
        </li>
      </p>
      <p className="learn-body">
        <li>
          Coronavirus disease (COVID-19) is a new strain that was discovered in
          2019 and has not been previously identified in humans.
        </li>
      </p>
      <br />
      <p className="learn-head text-warning">Precautions (For Everyone)</p>
      <p className="learn-subhead">
        <li>Wash your hands frequently</li>
      </p>
      <p className="learn-subbody">
        Regularly and thoroughly clean your hands with an alcohol-based hand rub
        or wash them with soap and water.
      </p>
      <p className="learn-subbody">
        Washing your hands with soap and water or using alcohol-based hand rub
        kills viruses that may be on your hands.
      </p>
      <p className="learn-subhead">
        <li>Maintain social distancing</li>
      </p>
      <p className="learn-subbody">
        Maintain at least 1 metre (3 feet) distance between yourself and anyone
        who is coughing or sneezing.
      </p>
      <p className="learn-subbody">
        When someone coughs or sneezes they spray small liquid droplets from
        their nose or mouth which may contain virus. If you are too close, you
        can breathe in the droplets, including the COVID-19 virus if the person
        coughing has the disease.
      </p>
      <p className="learn-subhead">
        <li>Avoid touching eyes, nose and mouth</li>
      </p>
      <p className="learn-subbody">
        Hands touch many surfaces and can pick up viruses. Once contaminated,
        hands can transfer the virus to your eyes, nose or mouth. From there,
        the virus can enter your body and can make you sick.
      </p>
      <p className="learn-subhead">
        <li>Practice respiratory hygiene</li>
      </p>
      <p className="learn-subbody">
        Make sure you, and the people around you, follow good respiratory
        hygiene. This means covering your mouth and nose with your bent elbow or
        tissue when you cough or sneeze. Then dispose of the used tissue
        immediately.
      </p>
      <p className="learn-subbody">
        Droplets spread virus. By following good respiratory hygiene you protect
        the people around you from viruses such as cold, flu and COVID-19.
      </p>
      <p className="learn-subhead">
        <li>
          If you have fever, cough and difficulty breathing, seek medical care
          early
        </li>
      </p>
      <p className="learn-subbody">
        Stay home if you feel unwell. If you have a fever, cough and difficulty
        breathing, seek medical attention and call in advance. Follow the
        directions of your local health authority.
      </p>
      <br />
      <p className="learn-head text-danger">
        Protection measures for persons who are in or have recently visited
        (past 14 days) areas where COVID-19 is spreading
      </p>
      <p className="learn-subhead">
        <li>Follow the guidance outlined above</li>
      </p>
      <p className="learn-subbody">
        Stay at home if you begin to feel unwell, even with mild symptoms such
        as headache and slight runny nose, until you recover.
      </p>
      <p className="learn-subbody">
        Avoiding contact with others and visits to medical facilities will allow
        these facilities to operate more effectively and help protect you and
        others from possible COVID-19 and other viruses.
      </p>
      <p className="learn-subbody">
        If you develop fever, cough and difficulty breathing, seek medical
        advice promptly as this may be due to a respiratory infection or other
        serious condition.
      </p>
      <p className="learn-subhead">
        <li>
          Call in advance and tell your provider of any recent travel or contact
          with travelers.
        </li>
      </p>
      <p className="learn-subbody">
        Calling in advance will allow your health care provider to quickly
        direct you to the right health facility. This will also help to prevent
        possible spread of COVID-19 and other viruses.
      </p>
    </div>
  );
};

export default Learn;
