import React from "react";
import MainLayout from "../Layout/MainLayout";

function Sponsorship() {
  return (
    <MainLayout>
      <div className="py-10 overflow-x-hidden">
        <div
          className="py-12 animate-marquee whitespace-nowrap text-green-400"
          style={{ "font-family": "Bungee Outline" }}
        >
          <span className="mx-8 text-8xl">Sponsorship</span>
          <span className="mx-8 text-8xl">Sponsorship</span>
          <span className="mx-8 text-8xl">Sponsorship</span>
          <span className="mx-8 text-8xl">Sponsorship</span>
          <span className="mx-8 text-8xl">Sponsorship</span>
        </div>
      </div>
      <div className="p-8 text-justify text-lg bg-green-500 text-green-100">
          <p>
            For YALFE 2024 we will collaborate with companies, governments,
            organisations, and individuals from all over the world to support
            the execution of the Summit. We are looking for partners who want to
            connect with the world's brightest minds in the environment &
            related industry and have their vision and progress shared with
            youth from across the world. This is your chance to be a part of
            something great and support meaningful youth engagement on the
            energy transition.
            <br />
            If you would like to become a partner or learn more about our
            sponsorship opportunities, please reach out to esummit24@gmail.com
            <br />
            The Youth Action and Leadership Forum for Environment 2024 also
            provides a large spectrum of individual conference sponsorship and
            associated benefits:
            <br />
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-green-100">
        <div className="p-8 text-justify text-lg border-2 m-6 bg-green-200 rounded-xl">
          <h1 className="text-2xl text-center p-3 bg-green-800 rounded-xl text-green-100">DIAMOND Sponsorship: $15,000</h1>
          <p className="p-10">
            <p className="text-xl">Sponsor Benefits:</p>
            <br />
            <ul className="list-disc">
              <li>Logo on the main page of the sponsored conference</li>
              <li>
                Company information, brochures, or other materials distributed
                at the event
              </li>
              <li>
                Five waived conference registration fees for sponsor's
                representatives including gala dinner
              </li>
              <li>Sponsor banner at the meeting locations</li>
              <li>One keynote/invited speech of a sponsor representative</li>
              <li>Conference awards in the name of the sponsor </li>
            </ul>
          </p>
        </div>
        <div className="p-8 text-justify text-lg border-2 m-6 bg-green-200 rounded-xl">
          <h1 className="text-2xl text-center p-3 bg-green-800 rounded-xl text-green-100">PLATINUM Sponsorship: $10,000</h1>
          <p className="p-10">
          <p className="text-xl">Sponsor Benefits:</p>
            <br />
            <ul className="list-disc">
              <li>Logo on the main page of the sponsored conference</li>
              <li>
                Four waived conference registration fees for sponsor's
                representatives including gala dinner
              </li>
              <li>One keynote/invited speech of a sponsor representative</li>
              <li>Welcome address during cocktail party and dinner</li>
              <li>Conference awards in the name of the sponsor</li>
            </ul>
          </p>
        </div>
        <div className="p-8 text-justify text-lg border-2 m-6 bg-green-200 rounded-xl">
          <h1 className="text-2xl text-center p-3 bg-green-800 rounded-xl text-green-100">GOLD Sponsorship: $7,500</h1>
          <p className="p-10">
          <p className="text-xl">Sponsor Benefits:</p>
            <br />
            <ul className="list-disc">
              <li>Logo on the main page of the sponsored conference</li>
              <li>
                Three waived conference registration fees for sponsor's
                representatives including gala dinner
              </li>
              <li>One keynote/invited speech of a sponsor representative</li>
              <li>Welcome address during cocktail party</li>
            </ul>
          </p>
        </div>
        <div className="p-8 text-justify text-lg border-2 m-6 bg-green-200 rounded-xl">
          <h1 className="text-2xl text-center p-3 bg-green-800 rounded-xl text-green-100">SILVER Sponsorship: $5,000</h1>
          <p className="p-10">
          <p className="text-xl">Sponsor Benefits:</p>
            <br />
            <ul className="list-disc">
              <li>Logo on the main page of the sponsored conference</li>
              <li>
                Company information, brochures, or other materials distributed
                to attendees
              </li>
              <li></li>
              <li>One keynote/invited speech of a sponsor representative</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="bg-green-100 p-8">
        <div className="grid grid-cols-1 w-fit p-8  text-justify text-lg border-2 m-auto bg-green-200 rounded-xl">
            <h1 className="text-2xl text-center p-3 bg-green-800 rounded-xl text-green-100">BRONZE Sponsorship: $3,000</h1>
            <p className="p-10">
            <p className="text-xl">Sponsor Benefits:</p>
                <br />
                <ul className="list-disc">
                <li>Logo on the main page of the sponsored conference</li>
                <li>
                    One waived conference registration fees for sponsor's
                    representatives including gala dinner
                </li>
                <li>One keynote/invited speech of a sponsor representative</li>
                </ul>
            </p>
            </div>
      </div>
    </MainLayout>
  );
}

export default Sponsorship;
