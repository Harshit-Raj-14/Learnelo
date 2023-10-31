"use client";

import './hanko.css'

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    window.location.href = "http://localhost:3030"; // Replace with your desired URL
  }, []);

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

  return (
    <main>
      <div className="bhagar">
        <div className='bhaga'>
          <h3>Teaching </h3>
            <h3>and</h3>
          <h3>Learning</h3>
          <h3>Anytime</h3>
            <h3>Anywhere</h3>
        </div>
        <hanko-auth />
      </div>
      <br></br>
      <h2>only on Learnelo.com</h2>

    </main>

  );
}
