import Image from 'next/image';

export default function About() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      <div className="flex flex-col items-center Aliyan-Dev justify-center py-32 dark:bg-slate-950 bg-gray-100 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-slate-900 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/Logo1.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-white text-lg mb-4">
                Hello! I'm Aliyan, a passionate software developer and tech enthusiast. I created this website to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I'm here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-white text-lg">
                Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 dark:bg-slate-950 Aliyan-Dev text-xl bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold dark:text-white text-gray-900">Aliyan's Journey as a Coder</h2>
            <p className="mt-4 text-lg dark:text-white text-gray-600">
              From curious beginner to seasoned developer, here's how Aliyan navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/Logo1.png" alt="Aliyan as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-gray-800">The Spark of Curiosity</h3>
                <p className="mt-4 dark:text-white text-gray-600">
                  Aliyan’s coding journey began in Youtube when he stumbled upon his first programming language—Javascript. What started as a simple curiosity quickly turned into a passion, as Aliyan spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/Logo1.png" alt="Aliyan learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-gray-800">Diving Deeper</h3>
                <p className="mt-4 dark:text-white text-gray-600">
                  After mastering the basics, Aliyan’s thirst for knowledge grew. He began exploring more complex topics such as  web development and Gen AI. Enrolling in online courses and attending coding bootcamps, Aliyan quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/Logo1.png" alt="Aliyan working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-gray-800">Taking on Challenges</h3>
                <p className="mt-4 dark:text-white text-gray-600">
                  With 1.5 years of experience under his belt, Aliyan began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Aliyan continued to push his limits, always looking for opportunities to learn and grow. His journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}