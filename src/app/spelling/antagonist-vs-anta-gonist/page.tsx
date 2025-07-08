import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Antagonist or Anta gonist - Which is Correct?",
  description: "Learn the correct spelling between &apos;antagonist&apos; and &apos;anta gonist&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AntagonistVsAntaGonistPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Antagonist or Anta gonist</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Antagonist or Anta gonist, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Anta gonist</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Anta gonist&quot; should be written as one word.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Antagonist</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Antagonist&quot; means a person who opposes or competes against another.
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
              <span className="font-bold">Antagonist</span> (noun): A person who actively opposes or is hostile to someone or something; an adversary or opponent.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The villain is the antagonist in this story.</li>
              <li>He became the main antagonist in the political debate.</li>
              <li>The drug acts as an antagonist to the hormone.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;antagonist&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Adversary</li>
                  <li>Opponent</li>
                  <li>Enemy</li>
                  <li>Rival</li>
                  <li>Foe</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Villain</li>
                  <li>Competitor</li>
                  <li>Challenger</li>
                  <li>Opposition</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Antagonist&quot; is the correct spelling. &quot;Anta gonist&quot; is incorrect—remember, it&apos;s one word, not two separate words.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it anta gonist or antagonist?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;antagonist.&quot; &quot;Anta gonist&quot; is incorrect—it should be written as one word.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce antagonist?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ænˈtæɡənɪst/ (an-TAG-uh-nist).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does antagonist mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A person who actively opposes or is hostile to someone or something; an adversary or opponent.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the opposite of antagonist?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The opposite of antagonist is &quot;protagonist&quot; - meaning the main character or hero in a story.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can antagonist be used in biology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In biology, an antagonist is a muscle that opposes the action of another muscle, or a drug that blocks the action of another substance.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is antagonist always a person?</div>
              <div className="text-lg md:text-xl text-muted-foreground">No, an antagonist can be a person, group, force, or even an abstract concept that opposes something else.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between antagonist and villain?</div>
              <div className="text-lg md:text-xl text-muted-foreground">An antagonist opposes the protagonist, while a villain is specifically evil. An antagonist doesn&apos;t have to be evil.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can you have multiple antagonists?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Stories can have multiple antagonists, including a main antagonist and secondary antagonists.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of antagonist?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Antagonist comes from Greek &quot;antagonistes&quot; meaning opponent or rival, from &quot;anti-&quot; (against) + &quot;agonistes&quot; (combatant).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is antagonist used in psychology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In psychology, an antagonist is a chemical or drug that blocks the action of a neurotransmitter or hormone.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 