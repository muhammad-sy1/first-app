import React, { useState } from "react";

// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const CreateAccount = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [value, setValue] = useState();

  const FormSchema = z.object({
    firstName: z.string().min(2, {
      message: t("contact.form.usernameError"),
    }),
    lastName: z.string().min(2, {
      message: t("contact.form.usernameError"),
    }),
    email: z.string().email({
      message: t("contact.form.emailError"),
    }),
    phone: z
      .string()
      .min(8, { message: t("contact.form.phoneError") })
      .regex(/^\d+$/, {
        message: t("contact.form.phoneError"),
      }),
    password: z
      .string()
      .min(8, {
        message: t("contact.form.messageMinError"),
      })
      .regex(/[A-Z]/, {
        message: t("contact.form.passwordUpperError"),
      })
      .regex(/[0-9]/, {
        message: t("contact.form.passwordNumberError"),
      })
      .regex(/[^A-Za-z0-9]/, {
        message: t("contact.form.passwordSpecialError"),
      }),
    radioGroup: z.enum(["all", "mentions", "none"], {
      required_error: "You need to select a notification type.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      radioGroup: "",
      checkbox: "",
    },
  });

  const items = [
    {
      id: "recents",
      label: "I agree to the Privacy Policy and the Terms of Service",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-y-5 w-full">
        <div className="text-4xl font-semibold text-my-green">
          Create <span className="text-black">An Account</span>
        </div>
        <div className="text-neutral-600 text-2xl">
          {t("contact.form.title")}
        </div>
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit()}
              className="xl:w-3/4 lg:w-4/5 w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.firstName")}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.lastName")}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {/* <PhoneInput
                        className="w-full"
                        placeholder="phone number"
                        value={value}
                        onChange={setValue}
                        defaultCountry="SA"
                        {...field}
                        required
                      /> */}

                      <Input
                        placeholder={t("contact.form.phone")}
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.birthDate")}
                        type="date"
                        {...field}
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
                        type={showPassword ? "text" : "password"}
                        required
                      />
                    </FormControl>
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-2xl h-10 end-0 bg-transparent text-my-black hover:bg-transparent"
                    >
                      {showPassword ? <IoEyeOff /> : <IoEye />}
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.confirmPassword")}
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        required
                      />
                    </FormControl>
                    <Button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute text-2xl h-10 end-0 bg-transparent text-my-black hover:bg-transparent"
                    >
                      {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="radioGroup"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-x-8"
                      >
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="all" />
                          </FormControl>
                          <FormLabel className="font-normal text-lg">
                            Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="mentions" />
                          </FormControl>
                          <FormLabel className="font-normal text-lg">
                            Female
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    {/* <div className="mb-4">
                      <FormLabel className="text-base">Sidebar</FormLabel>
                      <FormDescription>
                        Select the items you want to display in the sidebar.
                      </FormDescription>
                    </div> */}
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center gap-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked;
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="py-5 w-full" variant="heavy" type="submit">
                {t("contact.form.create")}
              </Button>
              <div className="flex justify-center gap-x-2 items-center">
                <div className="text-my-green">Already a Member?</div>
                <NavLink className="" to="../login">
                  Back to login
                </NavLink>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
