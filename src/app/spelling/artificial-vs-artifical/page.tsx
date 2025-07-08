import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Artificial or Artifical - Which is Correct?",
  description: "Learn the correct spelling between &apos;artificial&apos; and &apos;artifical&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ArtificialVsArtificalPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Artificial or Artifical</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Artificial or Artifical, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Artifical</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Artifical&quot; is missing the second &quot;i&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Artificial</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Artificial&quot; has double &quot;i&quot;.
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
              <span className="font-bold">Artificial</span> (adjective): Made by human skill; not natural; synthetic; fake or imitation.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Artificial intelligence is transforming technology.</li>
              <li>She wore artificial flowers in her hair.</li>
              <li>The lake has artificial lighting for evening events.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;artificial&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Man-made:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Man-made</li>
                  <li>Synthetic</li>
                  <li>Manufactured</li>
                  <li>Fabricated</li>
                  <li>Constructed</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Fake:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Fake</li>
                  <li>Imitation</li>
                  <li>False</li>
                  <li>Counterfeit</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Artificial&quot; is the correct spelling. &quot;Artifical&quot; is incorrect—remember the double &quot;i&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it artifical or artificial?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;artificial.&quot; &quot;Artifical&quot; is incorrect—it&apos;s missing the second &quot;i&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce artificial?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌɑːtɪˈfɪʃəl/ (ar-tuh-FISH-uhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does artificial mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Made by human skill; not natural; synthetic; fake or imitation.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between artificial and natural?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Artificial&quot; means made by humans, while &quot;natural&quot; means occurring in nature without human intervention.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can artificial be used in technology contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Artificial intelligence, artificial neural networks, and artificial satellites are common tech terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with artificial?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: artificial intelligence, artificial sweetener, artificial lighting, and artificial turf.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is artificial used in medical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Artificial limbs, artificial organs, artificial joints, and artificial insemination are medical terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the adverb form of artificial?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adverb is &quot;artificially&quot; - meaning in an artificial manner or by artificial means.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of artificial?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Artificial comes from Latin &quot;artificialis&quot; meaning made by art, from &quot;ars&quot; meaning skill or art.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can artificial be used in environmental contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Artificial reefs, artificial wetlands, artificial ecosystems, and artificial habitats are environmental terms.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 