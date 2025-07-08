import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appearance or Apperance - Which is Correct?",
  description: "Learn the correct spelling between &apos;appearance&apos; and &apos;apperance&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppearanceVsApperancePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appearance or Apperance</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appearance or Apperance, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apperance</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apperance&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appearance</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appearance&quot; means the way something looks or seems.
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
              <span className="font-bold">Appearance</span> (noun): The way that someone or something looks; the act of appearing or becoming visible; outward aspect or impression.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Her appearance at the meeting was unexpected.</li>
              <li>The house&apos;s appearance was deceiving—it looked small from outside.</li>
              <li>First appearances can be misleading.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appearance&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Look</li>
                  <li>Aspect</li>
                  <li>Image</li>
                  <li>Presence</li>
                  <li>Form</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Outward</li>
                  <li>Exterior</li>
                  <li>Surface</li>
                  <li>Impression</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appearance&quot; is the correct spelling. &quot;Apperance&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apperance or appearance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appearance.&quot; &quot;Apperance&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appearance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpɪrəns/ (uh-PEER-uhns).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appearance mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The way that someone or something looks; the act of appearing or becoming visible; outward aspect or impression.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appearance and look?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appearance&quot; is more formal and comprehensive, while &quot;look&quot; is more casual and immediate.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appearance be used for non-physical things?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! You can talk about the appearance of a situation, an argument, or even a mathematical equation.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with appearance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: make an appearance, keep up appearances, outward appearance, and public appearance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appearance used in legal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In law, &quot;appearance&quot; refers to a party&apos;s formal participation in a legal proceeding.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of appearance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb form is &quot;appear&quot; - meaning to become visible or present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appearance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appearance comes from Old French &quot;aparance&quot; meaning appearance, from Latin &quot;apparentia&quot; meaning visibility.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appearance be used in psychology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In psychology, appearance can refer to how someone presents themselves or how they are perceived by others.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 