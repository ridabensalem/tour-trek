import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Maria Smantha",
    role: "Web Developer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    text: "Tour Trek made my travel experience seamless and enjoyable. Their customer service is top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    text: "The quality of Tour Trek's products exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "John Smith",
    role: "Marketing Specialist",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
    text: "Reliable and efficient, Tour Trek is my go-to for all my travel needs.",
    rating: 5,
  }
];

const SocialProof = () => {
  return (
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
      <h3 className="mb-6 text-3xl font-bold">What people think about us</h3>
      <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
      People appreciate Tour Trek for its exceptional customer service and high-quality products. Many highlight our reliability and dedication to meeting their travel needs efficiently.
      </p>
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        {testimonials.map(({ id, name, role, image, text, rating }) => (
          <div key={id} className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={image}
                alt={name}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">{name}</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">{role}</h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300">
              <span className="inline-block pe-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="[&>svg]:w-5"
                >
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                </svg>
              </span>
              {text}
            </p>
            <ul className="mb-0 flex items-center justify-center">
              {[...Array(rating)].map((_, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;