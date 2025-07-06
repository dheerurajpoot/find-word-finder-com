import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appropriate vs Apropriate - Which is Correct?",
  description: "Learn the correct spelling between &apos;appropriate&apos; and &apos;apropriate&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppropriateVsApropriatePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appropriate or Apropriate</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appropriate or Apropriate, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apropriate</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apropriate&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appropriate</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appropriate&quot; has double &quot;p&quot;.
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
              <span className="font-bold">Appropriate</span> (adjective/verb): Suitable or proper for a particular situation; to take something for one&apos;s own use.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>It&apos;s appropriate to wear formal clothes to a wedding.</li>
              <li>The government appropriated funds for the project.</li>
              <li>That comment wasn&apos;t appropriate for the situation.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appropriate&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Suitable:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Suitable</li>
                  <li>Proper</li>
                  <li>Fitting</li>
                  <li>Correct</li>
                  <li>Relevant</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Actions:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Allocate</li>
                  <li>Assign</li>
                  <li>Designate</li>
                  <li>Reserve</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appropriate&quot; is the correct spelling. &quot;Apropriate&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apropriate or appropriate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appropriate.&quot; &quot;Apropriate&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appropriate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈproʊpriət/ (uh-PROH-pree-uht).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appropriate mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Suitable or proper for a particular situation; to take something for one&apos;s own use.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appropriate and suitable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appropriate&quot; often implies social or contextual correctness, while &quot;suitable&quot; is more about practical fit.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appropriate be used as a verb?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The government appropriated funds&quot; means they took or allocated funds for a specific purpose.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with appropriate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: appropriate for, appropriate to, age-appropriate, and contextually appropriate.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appropriate used in formal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Appropriate behavior, appropriate language, and appropriate dress are common in formal settings.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the opposite of appropriate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Inappropriate, unsuitable, improper, or unfitting are opposites of appropriate.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appropriate?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appropriate comes from Latin &quot;appropriatus&quot; meaning to make one&apos;s own, from &quot;ad&quot; + &quot;proprius&quot; meaning own.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appropriate be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Appropriate measures, appropriate response, and appropriate allocation are common business terms.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 