import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Apparition or Aparation - Which is Correct?",
  description: "Learn the correct spelling between &apos;apparition&apos; and &apos;aparation&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ApparitionVsAparationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Apparition or Aparation</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Apparition or Aparation, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aparation</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Aparation&quot; should be spelled with double &quot;p&quot; and &quot;ition&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Apparition</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Apparition&quot; means a ghostly figure or sudden appearance.
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
              <span className="font-bold">Apparition</span> (noun): A ghost or ghostlike image of a person; a sudden or unusual sight; the act of appearing.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The old castle was said to be haunted by the apparition of a lady in white.</li>
              <li>An apparition appeared in the misty forest.</li>
              <li>The sudden apparition of the deer startled the hikers.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;apparition&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Ghost</li>
                  <li>Phantom</li>
                  <li>Specter</li>
                  <li>Spirit</li>
                  <li>Vision</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Manifestation</li>
                  <li>Phenomenon</li>
                  <li>Illusion</li>
                  <li>Mirage</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Apparition&quot; is the correct spelling. &quot;Aparation&quot; is incorrect—remember the double &quot;p&quot; and &quot;ition&quot; ending.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aparation or apparition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;apparition.&quot; &quot;Aparation&quot; is incorrect—it should have double &quot;p&quot; and end with &quot;ition.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce apparition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌæpəˈrɪʃən/ (ap-uh-RISH-uhn).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does apparition mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A ghost or ghostlike image of a person; a sudden or unusual sight; the act of appearing.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between apparition and ghost?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Apparition&quot; is more formal and literary, while &quot;ghost&quot; is the more common everyday term.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can apparition be used for non-ghostly things?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! An apparition can refer to any sudden or unexpected appearance, not just ghosts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with apparition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: ghostly apparition, sudden apparition, and mysterious apparition.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is apparition used in literature?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Apparition is commonly used in Gothic literature, ghost stories, and supernatural fiction.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of apparition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb form is &quot;appear&quot; - meaning to become visible or present.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of apparition?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Apparition comes from Latin &quot;apparitio&quot; meaning appearance, from &quot;apparere&quot; (to appear).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can apparition be used in scientific contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In science, apparition can refer to optical illusions or unexpected visual phenomena.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 