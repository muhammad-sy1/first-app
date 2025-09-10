import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const LogIn = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const FormSchema = z.object({
    // username: z.string().min(2, {
    //   message: t("contact.form.usernameError"),
    // }),
    email: z.string().email({
      message: t("contact.form.emailError"),
    }),
    phone: z.string().regex(/^\d+$/, {
      message: t("contact.form.phoneError"),
    }),
    password: z
      .string()
      .min(8, {
        message: t("contact.form.messageMinError"),
      })
      .regex(/[A-Z]/, {
        message: t("contact.form.messageMaxError"), 
      })
      .regex(/[0-9]/, {
        message: t("contact.form.passwordNumberError"),
      })
      .regex(/[^A-Za-z0-9]/, {
        message: t("contact.form.passwordSpecialError"), 
      }),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <>
      <div className="flex flex-col gap-y-5 w-full">
        <div className="text-4xl font-semibold text-my-green">
          Log in to <span className="text-black">IZIKIZ</span>
        </div>
        <div className="text-neutral-600 text-2xl">
          {t("contact.form.title")}
        </div>
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit()} className="xl:w-3/4 lg:w-4/5 w-full space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.email")}
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.password")}
                        {...field}
                        type={show ? "text" : "password"}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      onClick={() => setShow(!show)}
                      className="absolute text-2xl h-10 end-0 bg-transparent text-my-black hover:bg-transparent"
                    >
                      {show ? <IoEyeOff /> : <IoEye />}
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="py-5 w-full" variant="heavy" type="submit">
                {t("contact.form.submit")}
              </Button>
              <div className="flex justify-between items-center">
                <NavLink className="" to="../create-account">
                  {t("contact.form.create")}
                </NavLink>
                <NavLink className="" to="../check">
                  {t("contact.form.forgetPassword")}
                </NavLink>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
