import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absent or Apsent - Which is Correct?",
  description: "Learn the correct spelling between &apos;absent&apos; and &apos;apsent&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsentVsApsentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absent or Apsent</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Absent or Apsent, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apsent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apsent&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absent</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absent&quot; means not present or missing.
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
              <span className="font-bold">Absent</span> (adjective): Not present or missing; not in attendance.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>He was absent from work due to a family emergency.</li>
              <li>The absent teacher had a substitute for the day.</li>
              <li>Several students were absent during the field trip.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absent&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Missing</li>
                  <li>Gone</li>
                  <li>Away</li>
                  <li>Unavailable</li>
                  <li>Nonattendant</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Absentee</li>
                  <li>Absent-minded</li>
                  <li>Absenteeism</li>
                  <li>Nonattendance</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absent&quot; is the correct spelling. &quot;Apsent&quot; is a common misspelling—remember, it has a &quot;B&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apsent or absent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absent.&quot; &quot;Apsent&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæbsənt/ (AB-suhnt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absent mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Not present or missing; not in attendance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the noun form of absent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The noun form is &quot;absence&quot; - meaning the state of being away or not present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can absent be used as a verb?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;absent&quot; can be used as a verb meaning to stay away or withdraw oneself.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absent-minded mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Absent-minded means forgetful or preoccupied, not paying attention to what&apos;s happening.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is absent only used for people?</div>
              <div className="text-lg md:text-xl text-muted-foreground">No, absent can describe things, qualities, or conditions that are missing or not present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the opposite of absent?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The opposite of absent is &quot;present&quot; - meaning being there or available.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How is absent used in workplace contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">In workplaces, employees are marked as absent when they don&apos;t show up for work, and this affects attendance records and pay.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between absent and missing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both mean not present, but &quot;missing&quot; often implies something that should be there but isn&apos;t, while &quot;absent&quot; is more neutral.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 