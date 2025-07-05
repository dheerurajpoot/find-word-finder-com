import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Apology vs Appology - Which is Correct?",
  description: "Learn the correct spelling between &apos;apology&apos; and &apos;appology&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApologyVsAppologyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Apology or Appology</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Apology or Appology, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Appology</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Appology&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Apology</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Apology&quot; is a noun meaning a regretful acknowledgment.
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
              <span className="font-bold">Apology</span> (noun): A regretful acknowledgment of an offense or failure; an expression of regret.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She offered an apology for being late.</li>
              <li>I owe you an apology for my behavior.</li>
              <li>He made a public apology for his comments.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;apology&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Excuse</li>
                  <li>Regret</li>
                  <li>Confession</li>
                  <li>Admission</li>
                  <li>Amends</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Phrases:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>I'm sorry</li>
                  <li>My bad</li>
                  <li>Mea culpa</li>
                  <li>Expression of regret</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Apology&quot; is the correct spelling. &quot;Appology&quot; is a common misspelling—remember, it only has one &quot;p&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it appology or apology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;apology.&quot; &quot;Appology&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce apology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpɒlədʒi/ (uh-POL-uh-jee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does apology mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A regretful acknowledgment of an offense or failure; an expression of regret.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 