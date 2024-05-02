import { CardWithForm } from "@/components/comps/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={"/logo.svg"} alt="logo" width={150} height={150}></Image>
      <CardWithForm
        title="Login"
        description={"Faca o login"}
        inputs={["Email", "Senha"]}
        confirm="Login"
        cancel="Cadastro"
        redirecionarCancel="cadastro"
      ></CardWithForm>
    </main>
  );
}
