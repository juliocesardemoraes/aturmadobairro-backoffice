"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function ConfigForm({
  title,
  description,
  inputs = [],
  confirm = "login",
  cancel = "none",
  redirecionarCancel,
  onSubmit = () => {},
}: any) {
  const [firstValue, setFirstValue] = React.useState("");
  const [secondValue, setSecondValue] = React.useState("");
  const [thirdValue, setThirdValue] = React.useState("");
  const [fourthValue, setFourthValue] = React.useState("");
  const [fifthValue, setFifthValue] = React.useState("");

  React.useEffect(() => {
    const requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/config", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("res", result[0]);
        setFirstValue(result[0].phone);
        setSecondValue(result[0].social);
        setThirdValue(result[0].email);
        setFourthValue(result[0].pix);
        setFifthValue(result[0].bankAccount);
      })
      .catch((error) => console.error(error));
  }, []);

  const translate: any = {
    Telefone: firstValue,
    ["Rede social"]: secondValue,
    Email: thirdValue,
    Pix: fourthValue,
    ["Conta Bancaria"]: fifthValue,
  };

  const translateFuncs: any = {
    Telefone: setFirstValue,
    ["Rede social"]: setSecondValue,
    Email: setThirdValue,
    Pix: setFourthValue,
    ["Conta Bancaria"]: setFifthValue,
  };

  return (
    <Card className="w-[350px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(
            firstValue,
            secondValue,
            thirdValue,
            fourthValue,
            fifthValue
          );
        }}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {inputs.length > 0 &&
              inputs.map((item: any) => {
                return (
                  <div className="flex flex-col space-y-1.5" key={item}>
                    <Label htmlFor={item}>{item}</Label>
                    <Input
                      id={item}
                      placeholder={item}
                      value={translate[`${item}`]}
                      onChange={(e) => {
                        translateFuncs[item](e?.target?.value);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </CardContent>
        <CardFooter className="flex flex-end justify-end">
          {cancel && (
            <>
              <Link href={`/${redirecionarCancel}`}>
                <Button variant="outline">{cancel}</Button>
              </Link>
            </>
          )}

          <Button>{confirm}</Button>
        </CardFooter>
      </form>
    </Card>
  );
}