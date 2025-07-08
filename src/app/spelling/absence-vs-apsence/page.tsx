import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absence or Apsence - Which is Correct?",
  description: "Learn the correct spelling between &apos;absence&apos; and &apos;apsence&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsenceVsApsencePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absence or Apsence</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Absence or Apsence, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apsence</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apsence&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absence</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absence&quot; means the state of being away or not present.
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
              <span className="font-bold">Absence</span> (noun): The state of being away or not present; a period of time when someone is not present.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Her absence from the meeting was noticed by everyone.</li>
              <li>The absence of evidence doesn&apos;t prove innocence.</li>
              <li>He was marked absent from school yesterday.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absence&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Nonattendance</li>
                  <li>Missing</li>
                  <li>Lack</li>
                  <li>Omission</li>
                  <li>Vacancy</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Unavailability</li>
                  <li>Nonappearance</li>
                  <li>Disappearance</li>
                  <li>Departure</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absence&quot; is the correct spelling. &quot;Apsence&quot; is a common misspelling—remember, it has a &quot;B&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apsence or absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absence.&quot; &quot;Apsence&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæbsəns/ (AB-suhns).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absence mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The state of being away or not present; a period of time when someone is not present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the adjective form of absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adjective form is &quot;absent&quot; - meaning not present or missing.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can absence be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;absence&quot; is appropriate for both formal and informal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: absence of mind, leave of absence, conspicuous by absence, and absence makes the heart grow fonder.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is absence always about people?</div>
              <div className="text-lg md:text-xl text-muted-foreground">No, absence can refer to things, qualities, or conditions that are missing or not present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the opposite of absence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The opposite of absence is &quot;presence&quot; - meaning being present or available.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 