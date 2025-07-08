import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Argument or Arguement - Which is Correct?",
  description: "Learn the correct spelling between &apos;argument&apos; and &apos;arguement&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ArgumentVsArguementPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Argument or Arguement</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Argument or Arguement, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Arguement</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Arguement&quot; has an extra &quot;e&quot;.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Argument</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Argument&quot; has no extra &quot;e&quot;.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Argument</span> (noun): A reason or set of reasons given in support of an idea; a heated disagreement; a logical process of reasoning.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She presented a strong argument for the new policy.</li>
              <li>They had an argument about politics.</li>
              <li>The lawyer&apos;s argument was compelling.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;argument&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Reasoning:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Reasoning</li>
                  <li>Case</li>
                  <li>Point</li>
                  <li>Claim</li>
                  <li>Thesis</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Disagreement:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Dispute</li>
                  <li>Quarrel</li>
                  <li>Debate</li>
                  <li>Conflict</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Argument&quot; is the correct spelling. &quot;Arguement&quot; is incorrect—remember there&apos;s no extra &quot;e&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it arguement or argument?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;argument.&quot; &quot;Arguement&quot; is incorrect—it has an extra &quot;e&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce argument?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈɑːɡjəmənt/ (AR-gyuh-muhnt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does argument mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A reason or set of reasons given in support of an idea; a heated disagreement; a logical process of reasoning.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between argument and debate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Argument&quot; can be heated or logical, while &quot;debate&quot; is more formal and structured.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can argument be used in academic contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The author&apos;s argument is well-supported&quot; is common in academic writing.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with argument?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: argument for, argument against, valid argument, and winning argument.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is argument used in legal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Legal arguments, closing arguments, and oral arguments are common in law.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of argument?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;argue&quot; - meaning to give reasons for or against something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of argument?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Argument comes from Latin &quot;argumentum&quot; meaning evidence or proof, from &quot;arguere&quot; meaning to make clear.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can argument be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;We had an argument about dinner&quot; or &quot;That&apos;s a good argument&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 