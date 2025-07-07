import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Allot vs A-llot - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;allot&quot; and &quot;a-llot&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AllotVsAllotPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Allot vs A-llot</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;allot&quot; and &quot;a-llot&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: A-llot</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;A-llot&quot; is a common misspelling. The correct spelling is &quot;allot&quot; as a single word, not hyphenated.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Allot</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Allot&quot; is the correct spelling. It means to give or apportion something to someone as a share or task.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Allot</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Allot</strong> (verb): To give or apportion something to someone as a share or task.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Each student was <strong>allotted</strong> a locker.</li>
              <li>• The time <strong>allotted</strong> for the test was two hours.</li>
              <li>• Funds were <strong>allotted</strong> to each department.</li>
              <li>• The manager will <strong>allot</strong> tasks to the team members.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Allot</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Assign</li>
                <li>• Allocate</li>
                <li>• Distribute</li>
                <li>• Apportion</li>
                <li>• Grant</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Share</li>
                <li>• Portion</li>
                <li>• Provide</li>
                <li>• Endow</li>
                <li>• Allotment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Allot</strong> is spelled as a single word, not hyphenated.</li>
            <li>• Commonly used in academic, business, and everyday contexts.</li>
            <li>• The noun form is &quot;allotment&quot;.</li>
            <li>• The past tense is &quot;allotted&quot;.</li>
            <li>• The plural is &quot;allots&quot; (for third person singular present).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;a-llot&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;a-llot&quot; is never correct. The proper spelling is always &quot;allot&quot; as a single word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;allot&quot; is one word, not two or hyphenated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;allot&quot; be used in everyday conversation?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;allot&quot; is commonly used in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;allot&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: allot time, allot resources, allot funds, allot tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;a-llot&quot; happens because the prefix &quot;a-&quot; is mistakenly separated from the root, or by analogy with other hyphenated words.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Allot</strong> is the correct spelling as a single word. It means to give or assign as a share or task. The misspelling &quot;a-llot&quot; is never correct. Use &quot;allot&quot; in both formal and informal contexts.</p>
      </div>
    </div>
  );
} 