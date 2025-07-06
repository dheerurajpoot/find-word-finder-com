import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Acquisition vs Acquistion - Which is Correct?",
  description: "Learn the correct spelling between &apos;acquisition&apos; and &apos;acquistion&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcquisitionVsAcquistionPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Acquisition or Acquistion</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Acquisition or Acquistion, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acquistion</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acquistion&quot; is missing the &quot;i&quot; - it should be &quot;acquisition.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Acquisition</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Acquisition&quot; means the act of acquiring or gaining possession of something.
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
              <span className="font-bold">Acquisition</span> (noun): The act of acquiring or gaining possession of something. Something acquired or gained.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The company announced the acquisition of a smaller competitor.</li>
              <li>Language acquisition begins in early childhood.</li>
              <li>The museum&apos;s latest acquisition is a rare painting.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;acquisition&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Obtaining:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Procurement</li>
                  <li>Purchase</li>
                  <li>Obtainment</li>
                  <li>Attainment</li>
                  <li>Gaining</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Business:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Takeover</li>
                  <li>Merger</li>
                  <li>Buyout</li>
                  <li>Purchase</li>
                  <li>Investment</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Acquisition&quot; is the correct spelling. &quot;Acquistion&quot; is a common misspelling—remember the &quot;i&quot; in acquisition.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acquistion or acquisition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;acquisition.&quot; &quot;Acquistion&quot; is incorrect—it&apos;s missing the &quot;i.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce acquisition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌækwɪˈzɪʃən/ (ak-wi-ZISH-uhn).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does acquisition mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means the act of acquiring or gaining possession of something, or something that has been acquired.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between acquisition and purchase?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquisition is broader and can include various ways of obtaining something, while purchase specifically refers to buying.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquisition be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The acquisition of new technology&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with acquisition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: business acquisition, language acquisition, data acquisition, and asset acquisition.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is acquisition used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Corporate acquisition&quot; and &quot;merger and acquisition&quot; are common business terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of acquisition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;acquire&quot; - to gain possession of or obtain something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of acquisition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquisition comes from Latin &quot;acquisitio&quot; meaning the act of acquiring.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquisition be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The acquisition of new skills&quot; or &quot;company acquisition&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 