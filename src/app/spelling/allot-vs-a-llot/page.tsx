import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Allot vs A llot - Which is Correct?",
  description: "Learn the correct spelling between &apos;allot&apos; and &apos;a llot&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AllotVsALlotPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Allot or A llot</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Allot or A llot, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">A llot</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;A llot&quot; should be written as one word.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Allot</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Allot&quot; means to assign or distribute.
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
              <span className="font-bold">Allot</span> (verb): To assign or distribute something, especially time, money, or space.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The teacher will allot 30 minutes for the test.</li>
              <li>We need to allot more money for the project.</li>
              <li>Each team was allotted equal time for their presentation.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;allot&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Assign</li>
                  <li>Distribute</li>
                  <li>Allocate</li>
                  <li>Apportion</li>
                  <li>Designate</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Allocation</li>
                  <li>Assignment</li>
                  <li>Distribution</li>
                  <li>Apportionment</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Allot&quot; is the correct spelling. &quot;A llot&quot; is incorrect—remember, it&apos;s one word, not two separate words.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it a llot or allot?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;allot.&quot; &quot;A llot&quot; is incorrect—it should be written as one word.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce allot?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈlɒt/ (uh-LOT).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does allot mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To assign or distribute something, especially time, money, or space.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the noun form of allot?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun form is &quot;allotment&quot; - meaning the act of allotting or something that is allotted.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between allot and a lot?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Allot&quot; is a verb meaning to assign, while &quot;a lot&quot; is a phrase meaning many or much.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can allot be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;allot&quot; is appropriate for both formal and informal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with allot?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: allot time, allot money, allot space, and allot resources.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is allot the same as allocate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both mean to assign, but &quot;allocate&quot; is more formal and often used in business contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can you allot something to someone?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, you can allot something to someone: &quot;We allotted the budget to different departments.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the past tense of allot?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The past tense is &quot;allotted&quot; - &quot;We allotted extra time for the meeting.&quot;</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 