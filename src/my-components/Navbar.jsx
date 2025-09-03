import React from "react";
import { SlPlus } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";

const Navbar = () => {
  return (
    <header>
      <nav className="sm:max-w-[95%] mx-auto absolute z-50 top-10 inset-x-0 ">
        <div className="px-2 bg-gradient-to-r from-my-black/85 from-5% via-my-green/75 via-20% to-white/50 dark:to-black/50 to-90% h-16 rounded-xl">
          <div className="flex justify-between items-center h-full">
            <div className="h-full flex justify-center items-center p-3">
              <img
                src="/logo.png"
                alt="logo"
                className="h-full cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Dialog>
                <DialogTrigger>
                  <div className="flex items-center gap-x-2 transition-colors text-muted-foreground hover:text-foreground">
                    <SlPlus className="text-2xl" />
                    <span className="font-bold text-xl sm:flex hidden">
                      Publish a ride
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="">
                      Are you absolutely sure?
                    </DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <div
                      variant="secondary"
                      size="icon"
                      className="cursor-pointer transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <IoIosSearch className="text-3xl" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Search</DialogTitle>
                      <DialogDescription>
                        Click search when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Input
                          id="name-1"
                          name="name"
                          placeholder="Type anything"
                          // defaultValue="Type anything"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="light">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" variant="heavy">Search</Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="flex items-center gap-x-1 text-2xl transition-colors text-muted-foreground hover:text-foreground">
                    <FaUserCircle />
                    <MdKeyboardArrowDown />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
