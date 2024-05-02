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

export function CardWithForm({
  title,
  description,
  inputs = [],
  confirm = "login",
  cancel = "none",
  redirecionarCancel,
}: any) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {inputs.length > 0 &&
              inputs.map((item: any) => {
                return (
                  <div className="flex flex-col space-y-1.5" key={item}>
                    <Label htmlFor={item}>{item}</Label>
                    <Input id={item} placeholder={item} />
                  </div>
                );
              })}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/${redirecionarCancel}`}>
          <Button variant="outline">{cancel}</Button>
        </Link>
        <Button>{confirm}</Button>
      </CardFooter>
    </Card>
  );
}
