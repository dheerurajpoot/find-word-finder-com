import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Noticable or Noticeable - Which is Correct?",
  description: "Learn the correct spelling between &apos;noticable&apos; and &apos;noticeable&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function NoticeableVsNoticablePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Noticable or Noticeable</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Noticeable&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Noticable</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Noticable&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Noticeable</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Noticeable&quot; is an adjective meaning easily seen or noticed.
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
              <span className="font-bold">Noticeable</span> (adjective): Easily seen or noticed; clear or apparent; worthy of attention or observation.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>There was a noticeable improvement in her grades.</li>
              <li>The change in temperature was barely noticeable.</li>
              <li>His absence was very noticeable at the meeting.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;noticeable&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adjectives:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Obvious</li>
                  <li>Apparent</li>
                  <li>Visible</li>
                  <li>Detectable</li>
                  <li>Evident</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Conspicuous</li>
                  <li>Prominent</li>
                  <li>Marked</li>
                  <li>Distinct</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Noticeable&quot; is the correct spelling for something easily seen or noticed. &quot;Noticable&quot; is a common misspelling—remember, it has an &quot;e&quot; after the &quot;c.&quot;
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it noticable or noticeable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;noticeable.&quot; &quot;Noticable&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce noticeable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈnoʊtɪsəbl/ (NOH-tiss-uh-buhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does noticeable mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Easily seen or noticed; clear or apparent; worthy of attention or observation.</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/noticeable-vs-noticable" className="text-blue-700 hover:text-blue-900 underline">Noticeable vs Noticable</a></li>
            <li><a href="/spelling/noticeably-vs-noticably" className="text-blue-700 hover:text-blue-900 underline">Noticeably vs Noticably</a></li>
            <li><a href="/spelling/notice-vs-notice" className="text-blue-700 hover:text-blue-900 underline">Notice vs Notice</a></li>
            <li><a href="/spelling/noticed-vs-noticed" className="text-blue-700 hover:text-blue-900 underline">Noticed vs Noticed</a></li>
            <li><a href="/spelling/noticing-vs-noticing" className="text-blue-700 hover:text-blue-900 underline">Noticing vs Noticing</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/obvious-vs-obvious" className="text-purple-700 hover:text-purple-900 underline">Obvious vs Obvious</a></li>
            <li><a href="/spelling/apparent-vs-aparent" className="text-purple-700 hover:text-purple-900 underline">Apparent vs Aparent</a></li>
            <li><a href="/spelling/visible-vs-visable" className="text-purple-700 hover:text-purple-900 underline">Visible vs Visable</a></li>
            <li><a href="/spelling/detectable-vs-detectable" className="text-purple-700 hover:text-purple-900 underline">Detectable vs Detectable</a></li>
            <li><a href="/spelling/evident-vs-evident" className="text-purple-700 hover:text-purple-900 underline">Evident vs Evident</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/able-suffix" className="text-green-700 hover:text-green-900 underline">-able Suffix</a></li>
            <li><a href="/grammar/silent-e" className="text-green-700 hover:text-green-900 underline">Silent E</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 