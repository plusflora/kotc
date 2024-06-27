import "../App.css";

const LandingVideo = () => {
  return (
    <div className="landing-video">
      <iframe
        width="979"
        height="551"
        src="https://www.youtube.com/embed/x4EtJF5T5Xo"
        title="King of The Cove 2023 Event Video - Big Air Kiteboarding"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default LandingVideo;
