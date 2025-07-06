import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accessory vs Accesory - Which is Correct?",
  description: "Learn the correct spelling between &apos;accessory&apos; and &apos;accesory&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AccessoryVsAccesoryPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Accessory or Accesory</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Accessory or Accesory, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Accesory</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Accesory&quot; is missing the second &quot;s&quot; - it should be &quot;accessory.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Accessory</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Accessory&quot; means an additional item or someone who helps in a crime.
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
              <span className="font-bold">Accessory</span> (noun): 1) An additional item that complements or enhances something else. 2) Someone who helps in a crime without being the main perpetrator.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She wore beautiful accessories with her dress.</li>
              <li>The phone comes with several accessories.</li>
              <li>He was charged as an accessory to the crime.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;accessory&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Items:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Add-on</li>
                  <li>Attachment</li>
                  <li>Supplement</li>
                  <li>Adornment</li>
                  <li>Accoutrement</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Legal:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Accomplice</li>
                  <li>Helper</li>
                  <li>Assistant</li>
                  <li>Partner</li>
                  <li>Collaborator</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Accessory&quot; is the correct spelling. &quot;Accesory&quot; is a common misspelling—remember the double &quot;s&quot; in accessory.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it accesory or accessory?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;accessory.&quot; &quot;Accesory&quot; is incorrect—it&apos;s missing the second &quot;s.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce accessory?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əkˈsɛsəri/ (ak-SES-uh-ree).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does accessory mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means an additional item that complements something else, or someone who helps in a crime.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between accessory and supplement?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accessory enhances or complements, while supplement adds to or completes something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accessory be used in fashion contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Jewelry and handbags are popular fashion accessories&quot; is a common usage.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with accessory?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: fashion accessory, accessory to murder, and computer accessories.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is accessory used in legal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Accessory to a crime&quot; is a legal term for someone who helps but doesn&apos;t commit the main crime.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the plural form of accessory?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The plural is &quot;accessories&quot; - just add &quot;ies&quot; to the end.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of accessory?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Accessory comes from Latin &quot;accessorius&quot; meaning additional or supplementary.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can accessory be used in technology contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Phone accessories&quot; or &quot;computer accessories&quot; are common technology terms.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 