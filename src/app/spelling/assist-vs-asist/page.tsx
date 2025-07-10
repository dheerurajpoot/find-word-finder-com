import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assist or Asist - Which is Correct?",
  description: "Learn the correct spelling between 'assist' and 'asist'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AssistVsAsistPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Assist or Asist</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Which spelling is correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between &quot;Assist&quot; and &quot;Asist&quot;. These are commonly confused spellings and how to use them correctly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="text-3xl font-extrabold text-red-600 mb-2">❌ Asist</div>
          <div className="text-lg md:text-xl text-red-700">
            This spelling is incorrect. &quot;Asist&quot; is missing the second &quot;s&quot; - it should be &quot;assist.&quot;
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="text-3xl font-extrabold text-green-600 mb-2">✅ Assist</div>
          <div className="text-lg md:text-xl text-green-700">
            This is the correct spelling. &quot;Assist&quot; means to help or support someone.
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Definition</h2>
        <div className="text-lg md:text-xl space-y-4">
          <p>
            <span className="font-bold">Assist</span> (verb): To help or support someone in doing something; to give aid or support.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Examples:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Can you assist me with this project?</li>
              <li>The nurse will assist the doctor during surgery.</li>
              <li>I&apos;m here to assist you with any questions.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;assist&quot;:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Help</li>
              <li>Support</li>
              <li>Aid</li>
              <li>Facilitate</li>
              <li>Enable</li>
              <li>Guide</li>
              <li>Serve</li>
              <li>Contribute</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Related terms:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>Assistant</li>
              <li>Assistance</li>
              <li>Assisting</li>
              <li>Assisted</li>
              <li>Helper</li>
              <li>Support</li>
              <li>Service</li>
              <li>Cooperation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">Usage Notes</h2>
        <div className="text-lg md:text-xl space-y-4">
          <p>
            <strong>Note:</strong> &quot;Assist&quot; is the correct spelling with two &quot;s&quot; letters. &quot;Asist&quot; is a common misspelling—remember the correct spelling: a-s-s-i-s-t.
          </p>
          <p>
            <strong>Tip:</strong> Think of the word as having two &quot;s&quot; letters: <strong>as-sist</strong>. You can also remember that it comes from the Latin word <em>assistere</em>, which also has two &quot;s&quot; letters.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Is it asist or assist?</div>
            <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;assist.&quot; &quot;Asist&quot; is incorrect—it&apos;s missing the second &quot;s&quot; letter.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce assist?</div>
            <div className="text-lg md:text-xl text-muted-foreground">It&apos;s pronounced as /əˈsɪst/ (uh-SIST).</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What does assist mean?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Assist means to help or support someone in doing something; to give aid or support.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">How do you use assist in a sentence?</div>
            <div className="text-lg md:text-xl text-muted-foreground">You can say &quot;Can you assist me?&quot; or &quot;I&apos;ll assist you with that task.&quot;</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Is assist formal or informal?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Assist is appropriate in both formal and informal contexts.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between assist and help?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Assist is more formal and often implies providing specific support, while help is more general and can be used in any context.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Can assist be used in everyday conversation?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Can you assist me?&quot; or &quot;I&apos;ll assist you&quot; are common uses.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the past tense of assist?</div>
            <div className="text-lg md:text-xl text-muted-foreground">The past tense is &quot;assisted&quot; - with two &quot;s&quot; letters and &quot;ed&quot; ending.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of assist?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Assist comes from Latin &quot;assistere&quot; meaning to stand by, help, or support.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Is assist used in academic writing?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;This study will assist in understanding&quot; is common in academic and formal writing.</div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">Why is asist wrong?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Asist is wrong because it&apos;s missing the second &quot;s&quot; letter. The correct spelling is a-s-s-i-s-t.</div>
          </div>

          <div className="pb-4">
            <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with assist?</div>
            <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: assist with, assist in, assist someone, assist the team, and assist in the process.</div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Correct spelling:</strong> Assist
        </p>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Incorrect spelling:</strong> Asist
        </p>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Meaning:</strong> To help or support someone in doing something; to give aid or support.
        </p>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Remember:</strong> Always use two &quot;s&quot; letters: a-s-s-i-s-t. Think of <strong>as-sist</strong> to remember the correct spelling.
        </p>
      </div>
    </div>
  );
} 