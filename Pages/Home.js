import React from "react";
import "../index.css";
import VideoPlay from "../Components/Video";
function Home() {
  return (
    <div>
      <VideoPlay />
      <div className="overflow-x-hidden">
        <div
          className="py-12 animate-marquee whitespace-nowrap text-green-800"
          style={{ "font-family": "Bungee Outline" }}
        >
          <span className="mx-8 text-8xl">Home</span>
          <span className="mx-8 text-8xl">Home</span>
          <span className="mx-8 text-8xl">Home</span>
          <span className="mx-8 text-8xl">Home</span>
          <span className="mx-8 text-8xl">Home</span>
        </div>
        <div className="bg-green-100 px-12 text-justify py-8">
          <h1 className="text-4xl text-green-900 text-center font-semibold pb-4">
            Background: Environmental Crisis in India
          </h1>
          <p className="text-lg text-green-950">
            India is facing a catastrophic environmental crisis on multiple
            fronts. In metropolitan cities like Delhi, air pollution is rapidly
            emerging as the new “strangler”, spawning respiratory problems and
            sharp rise in mortality. Once hailed as the land of Holy Rivers, now
            each of its freshwater sources is a dumping ground full of
            pollutants and toxic chemicals. Villages and townships are facing
            acute shortage of potable water.
            <br />
            Climate change is exacerbating these problems, with rising
            temperatures and erratic weather patterns causing more frequent and
            severe natural disasters.
            <br />
            All this has defiled not just the indigenous culture but also the
            rich diversity of flora and fauna that India once bragged of.
            <br />
            Though steps are being taken to address this “life or death”
            situation, it can only be cured by mass youth participation around
            the globe.
            <br />
            So join us in building a habitable Earth for all !!
          </p>
        </div>
        <div className="bg-teal-800 px-12 text-justify py-8">
          <h1 className="text-4xl text-center text-white font-semibold pb-4">Our Story</h1>
          <p className="text-lg text-white">
            The idea for the inception of the Youth Action and Leadership Forum
            for Environment can be attributed to Achintya, a passionate young
            advocate for environmental concerns. The journey began with
            attending an international conference on “Emissions monitoring”,
            driven by genuine curiosity and a desire for knowledge. Engaging
            with a diverse group of individuals, Achintya actively participated
            in the two-day training workshop, forging valuable connections and
            expanding his network in the process.
            <br />
            Subsequently, Achintya expanded his involvement by participating in
            multiple conferences addressing critical issues such as climate
            change, clean energy transition and circular economy, among others.
            These engagements allowed him to amass knowledge, engage with
            various stakeholders, and gain hands-on learning experiences.
            Throughout this transformative process, he consistently observed a
            common yet distinctive insight— the paramount importance of youth
            involvement. Realising the significant disparity between the
            discussions and statements made in these forums and the actual
            implementation of effective measures on the ground, the idea of this
            youth driven Youth Action and Leadership Forum for Environment was
            born which underscored the urgent need for dedicated platforms that
            would facilitate serious youth-led deliberations, foster meaningful
            discussions, and provide forums for impactful dialogue within the
            environmental domain.
          </p>
        </div>
        <div className="bg-green-100 px-12 text-justify py-8">
          <h1 className="text-4xl text-center text-green-900 font-semibold pb-4">Our Vision</h1>
          <p className="text-lg text-green-950">
            With an overwhelming number of youths all over the world, it is
            clear that solutions to all our current ecological problems cannot
            be achieved unless we involve young people. The summit is a step in
            the right direction as it aims to bring together the changemakers
            from diverse backgrounds, build their leadership skills, and empower
            them to lead the fight against the environmental crisis by engaging
            them in an inter-generational dialogue with the leading experts in
            the field. We yearn for the much-needed yet delayed change in our
            habits, in order to fulfil our greater mission of conserving our
            planet for a sustainable future.
          </p>
        </div>
        <div className="bg-teal-800 px-12 text-justify py-8">
          <h1 className="text-4xl text-center text-white font-semibold pb-4">Who Are We?</h1>
          <p className="text-lg text-white">
            We are a group of passionate, motivated, and enthusiastic young
            people from the constituent colleges of University of Delhi who are
            students by day and leaders as well as activists by passion. The
            mission we share is to protect the environment. Our mutual objective
            is to bring about a positive change in our neighbourhood by bringing
            attention to the serious environmental problems we are currently
            facing.
            <br />
            Therefore, we are planning to host one of the largest Youth
            Environmental Summit in March 2024. This summit will serve as a
            platform for students, academicians, environmentalists to come
            together and exchange ideas, strategies, and best practices to
            mitigate the impact of climate change, global warming and other
            concurrent environmental issues and preserve our natural resources.
            <br />
            We invite you to join us in this exciting endeavour, as we work
            towards creating a greener, more sustainable future for ourselves
            and generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
