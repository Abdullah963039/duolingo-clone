"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push("/store");
  };

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex w-full items-center justify-center mb-5">
            <Image src="/mascot_bad.svg" alt="Mascot" height={80} width={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            You ran out of hearts!
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center text-base">
          Get Pro for unlimited hearts, of purchase them in the store
        </DialogDescription>

        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={onClick}
            >
              Get unlimited hearts
            </Button>
            <Button
              variant="primary-outline"
              size="lg"
              className="w-full"
              onClick={close}
            >
              no thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
