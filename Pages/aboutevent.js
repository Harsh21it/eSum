import React from "react";
import MainLayout from "../Layout/MainLayout";

function AboutEvent() {
  return (
    <div>
      <MainLayout>
        <div className="py-10 overflow-x-hidden">
          <div
            className="py-12 animate-marquee whitespace-nowrap text-green-800"
            style={{ "font-family": "Bungee Outline" }}
          >
            <span className="mx-8 text-8xl">About the Summit</span>
            <span className="mx-8 text-8xl">About the Summit</span>
            <span className="mx-8 text-8xl">About the Summit</span>
            <span className="mx-8 text-8xl">About the Summit</span>
            <span className="mx-8 text-8xl">About the Summit</span>
          </div>
        </div>
        <div className="bg-green-100 text-green-900 px-12 text-justify">
          <h1 className="text-4xl text-center p-3">About Event</h1>
          <p className="text-lg py-8">
            This confluence of youth constitutes a pioneering three-day summit,
            the first of its kind ever to be organised at the University of
            Delhi scheduled for March 2024. It is an entirely youth-driven,
            non-profit, and impartial endeavour.<br />
            Recognizing the immense potential of inclusivity, our primary
            objective is to engage a wide range of young individuals, both in
            organising and attending this conscientious realisation calling out
            for swifter action. Through this summit, attendees will have the
            chance to partake in thought-provoking panel discussions, workshops,
            thematic track deliberations, and engage in brainstorming
            activities, among other opportunities. The event will serve as a
            platform for youth to articulate their perspectives while also
            fostering a receptive environment for listening to others. Extensive
            planning is currently underway to ensure that this occasion leaves
            an enduring impact.
          </p>
        </div>
        <div className="bg-teal-800 text-white px-12 text-justify">
        <h1 className="text-4xl text-center p-3">Objectives</h1>
        <p className="text-lg py-8">
          Objectives for the Youth Environmental Summit:
          <br />
          <ol className="mt-3">
            <li>
              Establish a Regional Platform: Create a regional platform that
              brings together young individuals passionate about environmental
              issues from across India, fostering collaboration and knowledge
              sharing.
            </li>
            <li>
              Foster Community Building: Cultivate a sense of community among
              participants and partners by providing ample opportunities for
              networking and exchanging ideas, creating a supportive environment
              for youth engagement in environmental initiatives.
            </li>
            <li>
              Address key issues and their solutions: Facilitate discussions on
              critical environmental issues and emerging solutions with their
              socio-economic impact.
            </li>
            <li>
              Collaborative Initiatives: Identify and launch collaborative
              initiatives to bridge the gap between youth-driven environmental
              action and the industry.
            </li>
            <li>
              Inspire and Engage Youth Participants: Inspire and engage youth
              participants by providing platforms for action, empowering them to
              contribute to environmental solutions and promoting
              eco-entrepreneurship.
            </li>
          </ol>
          <div className="mt-5">
          The summit will encompass various Sustainable Development Goals (SDGs)
          that address critical global challenges. These include:
          <br />
          <ul className="mt-3 list-disc ml-3">
            <li>
              SDG 3: Good Health and Well-being - Addressing health challenges
              and promoting well-being in the context of environmental
              sustainability.
            </li>
            <li>
              SDG 4: Quality Education - Empowering individuals through
              inclusive and quality education with a focus on environmental
              awareness.
            </li>
            <li>
              SDG 7: Affordable and Clean Energy - Exploring innovative
              approaches to achieve universal access to affordable and clean
              energy sources.
            </li>
            <li>
              SDG 11: Sustainable Cities and Communities - Creating sustainable
              and inclusive urban environments, tackling urbanisation
              challenges.
            </li>
            <li>
              SDG 12: Responsible Consumption and Production - Promoting
              sustainable consumption and production patterns, efficient
              resource management, and waste reduction.
            </li>
            <li>
              SDG 13: Climate Action - Promoting strategies to combat climate
              change and build a sustainable future.
            </li>
          </ul>
          </div>
        </p>
        </div>
      </MainLayout>
    </div>
  );
}

export default AboutEvent;
