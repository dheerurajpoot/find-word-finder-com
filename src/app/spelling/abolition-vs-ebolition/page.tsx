import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Abolition vs Ebolition - Which is Correct?",
  description: "Learn the correct spelling between &apos;abolition&apos; and &apos;ebolition&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbolitionVsEbolitionPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Abolition or Ebolition</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Abolition or Ebolition, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Ebolition</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Ebolition&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Abolition</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Abolition&quot; means the act of officially ending something.
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
              <span className="font-bold">Abolition</span> (noun): The act of officially ending or stopping something, especially a law, system, or practice.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The abolition of slavery was a major historical event.</li>
              <li>Many countries support the abolition of the death penalty.</li>
              <li>The abolition of these outdated laws is long overdue.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;abolition&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Elimination</li>
                  <li>Termination</li>
                  <li>Annulment</li>
                  <li>Repeal</li>
                  <li>Discontinuation</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Removal</li>
                  <li>Ending</li>
                  <li>Dissolution</li>
                  <li>Extinction</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Abolition&quot; is the correct spelling. &quot;Ebolition&quot; is a common misspelling—remember, it starts with &quot;A&quot; not &quot;E&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it ebolition or abolition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;abolition.&quot; &quot;Ebolition&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce abolition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌæbəˈlɪʃən/ (ab-uh-LISH-uhn).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does abolition mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The act of officially ending or stopping something, especially a law, system, or practice.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the verb form of abolition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb form is &quot;abolish&quot; - meaning to officially end or stop something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can you give examples of abolition in history?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Examples include the abolition of slavery, abolition of child labor laws, and abolition of certain taxes.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is abolition always about laws?</div>
              <div className="text-lg md:text-xl text-muted-foreground">No, abolition can refer to ending any system, practice, or institution, not just laws.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 