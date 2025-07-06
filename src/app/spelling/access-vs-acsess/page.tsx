import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Access vs Acsess - Which is Correct?",
  description: "Learn the correct spelling between &apos;access&apos; and &apos;acsess&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccessVsAcsessPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Access or Acsess</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Access or Acsess, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acsess</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acsess&quot; is missing the second &quot;c&quot; - it should be &quot;access.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Access</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Access&quot; means the ability to enter or use something.
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
              <span className="font-bold">Access</span> (noun/verb): The ability to enter, approach, or use something. Permission to use or enter a place or system.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Students have access to the library.</li>
              <li>She accessed the computer system.</li>
              <li>The building has wheelchair access.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;access&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Entry:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Entry</li>
                  <li>Entrance</li>
                  <li>Admission</li>
                  <li>Approach</li>
                  <li>Gateway</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Permission:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Permission</li>
                  <li>Authorization</li>
                  <li>Clearance</li>
                  <li>Admittance</li>
                  <li>Passage</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Access&quot; is the correct spelling. &quot;Acsess&quot; is a common misspelling—remember the double &quot;c&quot; in access.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acsess or access?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;access.&quot; &quot;Acsess&quot; is incorrect—it&apos;s missing the second &quot;c.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce access?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæksɛs/ (AK-ses).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does access mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means the ability to enter, approach, or use something, or permission to use a system or place.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between access and entrance?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Access refers to the ability to use or enter, while entrance is the physical opening or doorway.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can access be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Users have access to the database&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with access?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: access code, access point, access control, and public access.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is access used in technology contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Access&quot; is commonly used in computing, networking, and information technology.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the adjective form of access?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adjective is &quot;accessible&quot; - easy to reach, enter, or use.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of access?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Access comes from Latin &quot;accessus&quot; meaning approach or entrance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can access be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;I have access to the files&quot; or &quot;The building has good access&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 