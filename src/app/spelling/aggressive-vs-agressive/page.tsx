import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Aggressive vs Agressive - Which is Correct? | Word Finder",
  description: "Learn the correct spelling between &quot;aggressive&quot; and &quot;agressive&quot;. Discover definitions, usage examples, and common mistakes to avoid.",
};

export default function AggressiveVsAgressivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Aggressive vs Agressive
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Confused between &quot;aggressive&quot; and &quot;agressive&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.
        </p>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agressive</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Agressive&quot; is a common misspelling. The correct spelling is &quot;aggressive&quot; with two &apos;g&apos;s.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Aggressive</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Aggressive&quot; is the correct spelling. It means ready or likely to attack or confront; characterized by or resulting from aggression.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Aggressive</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Aggressive</strong> (adjective): Ready or likely to attack or confront; characterized by or resulting from aggression. Also, showing determination and energetic pursuit of goals.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The dog became <strong>aggressive</strong> when it felt threatened.</li>
              <li>• She has an <strong>aggressive</strong> approach to business.</li>
              <li>• The company launched an <strong>aggressive</strong> marketing campaign.</li>
              <li>• He was criticized for his <strong>aggressive</strong> driving.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Aggressive</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Hostile</li>
                <li>• Assertive</li>
                <li>• Forceful</li>
                <li>• Combative</li>
                <li>• Pushy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Belligerent</li>
                <li>• Militant</li>
                <li>• Offensive</li>
                <li>• Violent</li>
                <li>• Dynamic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Aggressive</strong> is spelled with two &apos;g&apos;s, not one.</li>
            <li>• Used to describe both negative (hostile) and positive (determined) behaviors.</li>
            <li>• The noun form is &quot;aggression&quot;.</li>
            <li>• The adverb form is &quot;aggressively&quot;.</li>
            <li>• Commonly used in sports, business, and behavioral contexts.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agressive&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;agressive&quot; is never correct. The proper spelling is always &quot;aggressive&quot; with two &apos;g&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Remember &quot;aggressive&quot; has two &apos;g&apos;s, just like &quot;egg&quot; or &quot;suggest&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;aggressive&quot; have a positive meaning?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, it can mean determined or energetic, not just hostile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;aggressive&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Examples include: aggressive strategy, aggressive growth, aggressive behavior, aggressive marketing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;agressive&quot; happens because the double &apos;g&apos; is sometimes forgotten.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Aggressive</strong> is the correct spelling with two &apos;g&apos;s. It means ready to attack, confront, or pursue goals energetically. The misspelling &quot;agressive&quot; is never correct. Use &quot;aggressive&quot; in both positive and negative contexts, but always with two &apos;g&apos;s.
        </p>
      </div>
    </div>
  );
} 