import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appetite vs Appatite - Which is Correct?",
  description: "Learn the correct spelling between &apos;appetite&apos; and &apos;appatite&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppetiteVsAppatitePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appetite or Appatite</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appetite or Appatite, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Appatite</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Appatite&quot; should be spelled with &quot;ite&quot;.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appetite</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appetite&quot; means desire for food or other things.
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
              <span className="font-bold">Appetite</span> (noun): A natural desire to satisfy a bodily need, especially for food; a strong desire or liking for something.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>She has a healthy appetite and enjoys trying new foods.</li>
              <li>His appetite for adventure led him to travel the world.</li>
              <li>The medicine may affect your appetite.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appetite&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Hunger</li>
                  <li>Desire</li>
                  <li>Craving</li>
                  <li>Longing</li>
                  <li>Thirst</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Yearning</li>
                  <li>Eagerness</li>
                  <li>Enthusiasm</li>
                  <li>Passion</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appetite&quot; is the correct spelling. &quot;Appatite&quot; is incorrect—remember the &quot;ite&quot; ending, not &quot;ate&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it appatite or appetite?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appetite.&quot; &quot;Appatite&quot; is incorrect—it should end with &quot;ite&quot;, not &quot;ate&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appetite?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈæpətaɪt/ (AP-uh-tite).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appetite mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A natural desire to satisfy a bodily need, especially for food; a strong desire or liking for something.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appetite and hunger?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appetite&quot; is a psychological desire for food, while &quot;hunger&quot; is the physical need for nourishment.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appetite be used for non-food things?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! You can have an appetite for adventure, knowledge, success, or any other desire.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with appetite?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: healthy appetite, loss of appetite, whet your appetite, and appetite for destruction.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appetite used in medical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Doctors often ask about appetite changes as they can indicate health issues.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the adjective form of appetite?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adjective form is &quot;appetizing&quot; - meaning appealing to the appetite.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appetite?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appetite comes from Latin &quot;appetitus&quot; meaning desire or longing, from &quot;appetere&quot; (to seek after).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appetite be used in psychology?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! In psychology, appetite can refer to various types of desires and motivations beyond just food.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 