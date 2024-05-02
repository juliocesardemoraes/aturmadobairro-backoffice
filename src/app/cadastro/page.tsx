import { CardWithForm } from "@/components/comps/Card";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={"/logo.svg"} alt="logo" width={150} height={150}></Image>
      <CardWithForm
        title="Cadastro"
        description={"Faca o cadastro"}
        inputs={["Email", "Senha"]}
        confirm="Cadastro"
        cancel="Login"
        redirecionarCancel="/"
      ></CardWithForm>
    </main>
  );
}
