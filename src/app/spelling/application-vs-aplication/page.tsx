import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Application or Aplication - Which is Correct?",
  description: "Learn the correct spelling between &apos;application&apos; and &apos;aplication&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApplicationVsAplicationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Application or Aplication</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Application or Aplication, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aplication</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Aplication&quot; is missing the first &quot;p&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Application</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Application&quot; means a formal request or computer program.
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
              <span className="font-bold">Application</span> (noun): A formal request for something; a computer program designed for a specific task; the act of applying something.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I submitted my application for the job yesterday.</li>
              <li>This application helps you manage your finances.</li>
              <li>The application of this theory to real-world problems is challenging.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;application&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Request</li>
                  <li>Program</li>
                  <li>Use</li>
                  <li>Submission</li>
                  <li>Petition</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Form</li>
                  <li>Software</li>
                  <li>App</li>
                  <li>Request</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Application&quot; is the correct spelling. &quot;Aplication&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aplication or application?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;application.&quot; &quot;Aplication&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce application?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌæplɪˈkeɪʃən/ (ap-li-KAY-shuhn).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does application mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A formal request for something; a computer program designed for a specific task; the act of applying something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between application and app?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Application&quot; is the full, formal word, while &quot;app&quot; is the shortened, informal version commonly used for mobile software.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can application be used for job requests?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Job applications are formal requests for employment positions.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with application?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: job application, college application, software application, and practical application.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is application used in technology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In technology, application refers to a computer program or software designed for specific tasks.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the plural form of application?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The plural form is &quot;applications&quot; - meaning multiple requests, uses, or programs.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of application?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Application comes from Latin &quot;applicatio&quot; meaning attachment or application, from &quot;applicare&quot; (to apply).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can application be used in education?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! College applications, scholarship applications, and program applications are common in education.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 