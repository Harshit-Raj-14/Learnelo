# Building Learnelo - Educational Video Chat Application for students using Express, Socket.io and Hanko Authentication

## Just a small talk...
So, recently, while I was chatting with my friend Abhi, I realized something about him. Abhi, you see, is not your typical mathematician. He's the kind of mathematician who doesn't just solve complex equations – but he is also super good at explaining and "teaching" as well.

Honestly, I am not that big fan of maths myself.

But, me being a good friend and all. I was hearing to Abhi's latest predicament where he was being approached by some students who wanted to learn from him online. 

The problem being that he was not that big fan of the latest meeting apps in boom because either they were too distractive or were not up to the mark to become a teaching oriented platform. 

You know, how it is that some students can be really rowdy on online classes and would rather blast their favorite songs during maths class than focus on quadratic equations.

Me being an ardent software developer and a good friend who wanted to help my friend in need. It was not like I was itching to working on a new challenging project idea. I just couldn't resist the urge to.

![Problem Statement](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o2sg577eraemp5j4cvmi.png)

Now while Abhi's deadline was tight, the online classes need to be conducted in a week.

I promised him that I would deliver the product to him without any worries. 

And when the day came and I send him the web app, seeing a smile on my friend's face, I can at least say that this past week all my hard work hard finally paid off.
...

**But wait**, hold your horses, dear reader. This story isn't about the nitty-gritty details of me building this magical app. 

Oh no, it's something even more special that I wanted to share with you. Its about a secret tool, a tool that came to my rescue when I was working day and night to build and deliver Abhi's dream teaching platform as quickly as possible. 

But let's first give me a brief introduction about my project:


Ladies and gentlemen, boys and girls, learners of all ages, I welcome you all to a revolution in education! 📚✨

## Introducing our Solution : Learnelo
### Bringing Education Home Through Virtual Classrooms

![Learnelo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j8rrqxrt3thares09ska.png)

Instead of telling you things that you would have already figured out by now. Learnelo is a real time video and chat app.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wj5o5jn8wvhgqkrx58ym.png)

That's why I would straight away jump to the point what makes **learnelo** special and a learning and teaching focused software:


Learnelo - [Video Walkthrough link](https://youtu.be/ERTXhEd2yDI?si=ONMxZhFfJ_1sRv0a)
 

Let me tell you the **three mantras** that is the basic foundation of this web app:

### Mantra One: Real-time Video Calling 📹
Learnelo's minimalistic UI and optimisation allows you to have a seamless and focused learning with only you and your teacher in the class room.

### Mantra Two: Real-time Chat Talk 💬
Learnelo allow you to ask questions with your teacher in real time and clear your doubts instantly.
Whether it comes to sharing maths formulas or a lengthy proof you can do it right on Learnelo.

### Mantra Three: Real-time Collaborative Whiteboard 🖍️
Now this is what I had been waiting to tell you and would call this very feature what actually makes leanrelo stand out of the crowd and on the very top as an e-teaching based platform.

Learnelo brings this special classroom tool to your screen in real-time, but with a twist. It's not just a whiteboard; it's a collaborative canvas where ideas, equations, and creativity are shared and explored together. 

**It's the whiteboard space where Abhi and his students can now work together, discuss and solve maths problems live together.**

![three mantras](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0p2x4ldz1mvlpfdg9mrd.png)

## Development
If you are still wondering what technology I used to built the web app its right here - Node.js, React, Express.js, Socket.io, CSS.

**Did I miss something???**
Yes, that's right. The surprise tool that I used to ship my product faster than ever. 

Excited... Me too.

And so I can't wait to give that big reveal to you now.

You see exactly a day before where I had to send my product to Abhi I was sleeping. Yeah, its my right to be a procastinator, as a software developer.

[Calling]
**Abhi:** Harshit, is the software ready?

**Harshit:** (yawning) Isn't there still a day?

**Abhi:** I need to teach the students tomorrow early in the morning.

**Harshit:** Shouldn't you work in the night? (still feeling sleeping)

**Abhi:** That's what you all software engineers do. Come back to reality and get the work done quick.

Abhi puts the phone. But one thing I could say he was tight with the deadlines which we all hate.

Getting back to work with my coffee, I was sure I was mostly done and I only needed to now work to fix some bugs and UI improvements.

**All things were set.** _Or, so I thought._

But both the coffee and Abhi had worked their miracle to finally wake me up to reality.

When I realized that I was missing an integral portion of the app.
To make sure the web app was safe and secure I needed to build up a user authentication system.

But now I had almost zero time to do it. But instead of giving up and seeing a sad face of my friend.
I determined to surf the entire internet, when I chanced upon this heaven sent user authentication tool - "**HANKO**".

![Hanko](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wodjvm3eembcka8g96ng.png)

After fixing the bugs and getting the feel of the UI right.
I quickly went through the Hanko documentation and applied the same to my project.

And believe me they have done so very well with explaining and putting things together.
I don't need to speak it. You should actually go and see for yourself. Right here - [Hanko Documentation](https://docs.hanko.io/introduction)



## And that's it...
That's how I succeeded in completing and delivering my project on time.

**Its all thanks to Hanko.**

And that's why I am so very excited to write **how I quickly integrated my web app with Hanko.**

## What is Hanko?
It would be no fun if I am goign to talk about something but you are being totally clueless.
So, in just a simple sentence. Here's what you all need to know about Hanko:
> **Hanko is a lightweight, open source user authentication solution that takes you on the journey beyond passwords.**

## And what makes Hanko special:
* **Passkey Magic:** Hanko Cloud seamlessly incorporates passkeys, makes using passkeys super easy.

* **Mix and Match Integration:** Hanko Cloud provides a range of integration choices, from web components and SDKs to REST APIs.

* **Its Super Safe:** Hanko Cloud is like a fortress for your users' info, using super strong security.

* **Its Super Easy to Customize:** Hanko elements allows you to customize the login and signup page easily.

* **Pay Your Way:** Hanko Cloud has three price options, so there's something for everyone, no matter how big or small your business is.


## Its time we speak in the language of developers
First of all instead of going to build your app right through scratch.

You know how it is, every time you think of building a full stack website. Login, Signup and Logout options are always on your mind.
And Hanko can actually help you to escape the menial work of implementing the same thing again.
in fact if you are beginner you can use their starter template and the login, signup button will be right there waiting for you.

**Let's see how to do it:**
Head to the github repo - [Starter Project Link](https://github.com/teamhanko/hanko-nextjs-starter-pages-router)

**Clone the repo**
```bash
git clone https://github.com/teamhanko/hanko-nextjs-starter-pages-router.git
```
**Get the Hanko API URL**

Get the API URL from [Hanko console](https://cloud.hanko.io/) and add it to `.env.local` file.

**Install dependencies**

```bash
npm install
```
**Run the project**

```bash
npm run dev
```

> In case you have already made your project, you can follow the following steps to integrate Hanko to you project:

## Integrating Hanko with your Next.js project for Quick Authentication and User Profiles

Step 0: Yeah that's the basic sign up on https://www.hanko.io/.

## Step 1: Install Hanko Elements

Start by installing Hanko Elements, which provides you with the essential components: hanko-auth and hanko-profile.
```
npm install @teamhanko/hanko-elements
```

## Step 2: Add the Hanko API URL
Retrieve your Hanko API URL from the Hanko console and place it in your environment file (.env.local).
Just make an account on Hanko by signing up and you will get your API right here:

![Hanko API URL](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q49d2ov6m746kzt9mjv3.png)
```
NEXT_PUBLIC_HANKO_API_URL=https://your-hanko-api-url.here
```


## Step 3: Add the hanko-auth Component
The hanko-auth web component is your login interface. Start by importing the register function from @teamhanko/hanko-elements into your Next.js component. 
```
// components/HankoAuth.tsx

"use client"

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoAuth() {
  useEffect(() => {
    register(hankoApi)
      .catch((error) => {
        // handle error
      });
  }, []);

  return (
    <hanko-auth />
  );
}
```

![SignIn Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kh1aisdz2wzs6k6otb6s.png)

## Step 4: Use Dynamic Imports
In Next.js, we use dynamic imports for components that rely on client-side features. The register function sets up the hanko-auth element for the browser, and dynamic imports ensure it loads only on the client side.
```
// app/login/page.tsx

import dynamic from 'next/dynamic';
const HankoAuth = dynamic(() => import('@/components/HankoAuth'), { ssr: false })

export default function LoginPage() {
  return (
    <HankoAuth />
  );
}
```

## Step 5: Define Event Callbacks
Hanko Elements lets you listen for specific events, making it easy to handle actions like user logins.
**Isn't that amazing.**
```
// components/HankoAuth.tsx

"use client";
 
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";
 
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
 
export default function HankoAuth() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    // Successfully logged in, redirect to a page in your application
    router.replace("/dashboard");
  }, [router]);
 
  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  return <hanko-auth />;
}
```

## Step 6: Add the hanko-profile Component
The hanko-profile component allows users to manage their email addresses and passkeys.
```
// components/HankoProfile.jsx

"use client"

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  });

  return <hanko-profile />;
}
```

![Profile Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gv5yib7i1h26nan9oel9.png)


## Step 7: Implement Logout Functionality
Easily manage user logouts using Hanko Elements. Create a logout button component that you can use anywhere.
```
// components/LogoutButton.tsx

"use client";
 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
 
const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
 
export function LogoutBtn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
}
```

## Step 8: Customize Component Styles

> Now this is what I call the charm of Hanko.

You can customize the appearance of hanko-auth and hanko-profile components using CSS variables and parts. Refer to our customization guide for details.


## DO THIS OR I WILL BE SAD 🥺

I know its scary when you try things for the first time but believe me this tool can save a lot of your developer's time. And there's nothing wrong in taking a shortcut that gives you the best results.

So, why not give it a try and you can share here the project you made and how was your experience in using Hanko authentication in your project.

## HERE ARE SOME PROJECT SNAPS YOU WILL LIKE
**Learnelo Frontend - Room Creation**
![Website pic](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pyebcxigx3eaa32ad3n3.png)

**Learnelo - Hanko SignIn Authentication**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oca8kt7kdyf2zz6o9u1w.png)

**Learnelo - Video Call**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j8mxs8dgyq322bz8ynf4.png)

**Collaborative Whiteboard**
![Website pic](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nmm1eeebcxy4g8tz3kdz.png)

## Why I liked Hanko?
Before seeing you off I would like to tell my reasons for liking Hanko:

1) **Hanko** is so easily implemented and I liked how I can edit and apply more styling to my login pages using Hanko customization.
[Hanko Customization doc](https://docs.hanko.io/guides/hanko-elements/customize-appearance)

2) **Hanko** provides not only its own login process but also authentication via **Google, GitHub and Apple**.

<br>

Hope you enjoyed going through the article. You can follow me to get the latest update when I upload more such amazing article.

>The following project and blog is a submission for Hanko Hackathon.

## Who am I?

Just someone who is enthusiastic to write what he likes. Tech blogs, latest tech news, tutorials, Coding question solutions, Editorials, Interview Tips and many more stuff that you are bound to like.


I will be happy to Connect with you : https://www.linkedin.com/in/harshit-raj-500606229/









 
