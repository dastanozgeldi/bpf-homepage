import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  Code,
  GitBranch,
  Package,
  Server,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Card className="w-full max-w-2xl">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-extrabold tracking-tight">
              BPF CLUB
            </CardTitle>
            <Badge variant="outline" className="font-mono">
              v1.0.0
            </Badge>
          </div>
          <CardDescription className="text-base italic mt-2 font-medium">
            <blockquote className="border-l-4 pl-4 py-1">
              <p>Because 99.9% of devs write absolute dogshit code</p>
              <p className="mt-1">
                This isn&apos;t your bootcamp hugbox. We optimize or we die.
              </p>
            </blockquote>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <section>
            <div className="flex items-center gap-2 mb-2">
              <Server className="h-5 w-5" />
              <h2 className="text-xl font-bold">DEPLOYMENT</h2>
            </div>
            <Separator className="mb-3" />
            <p className="font-medium">
              Vercel Edge or go home.
              <br />
              Serverless? More like serverCOPE.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="h-5 w-5" />
              <h2 className="text-xl font-bold">CONTRIBUTING</h2>
            </div>
            <Separator className="mb-3" />
            <ol className="list-decimal list-inside font-medium space-y-1">
              <li>If you use any, you&apos;re dead to us</li>
              <li>No PR template because RTFM</li>
              <li>Fail TypeCheck = instant close</li>
              <li>Write tests or get rekt</li>
              <li>Commit messages in blood</li>
            </ol>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5" />
              <h2 className="text-xl font-bold">PHILOSOPHY</h2>
            </div>
            <Separator className="mb-3" />
            <div className="flex items-center gap-2 font-medium">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <p>If your bundle size is over 100kb, you should kill yourself</p>
            </div>
          </section>
        </CardContent>

        <CardFooter className="flex justify-between items-center border-t pt-4">
          <p className="font-bold">Now fuck off and start coding.</p>
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <Code className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
