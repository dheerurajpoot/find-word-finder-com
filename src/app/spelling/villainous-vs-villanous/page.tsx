import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Villainous or Villanous - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "villainous" and "villanous". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VillainousVsVillanousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Villainous or Villanous</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between "villainous" and "villanous"? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Villanous</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">"Villanous" is a misspelling. The correct spelling is "villainous" with an "i" after the double "l".</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Villainous</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">"Villainous" is the correct spelling. It means relating to, constituting, or guilty of wicked or criminal behavior.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Villainous (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Relating to, constituting, or guilty of wicked or criminal behavior; extremely bad or unpleasant.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>villainous</strong> character plotted against the hero.</li>
                  <li>• He was known for his <strong>villainous</strong> deeds.</li>
                  <li>• The <strong>villainous</strong> plot shocked the audience.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Villanous (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">"Villanous" is a misspelling of "villainous" and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• "Villanous" is not used in standard English.</li>
                  <li>• Always use <strong>villainous</strong> when describing wicked behavior.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Villainous:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Wicked</li>
                <li>• Evil</li>
                <li>• Nefarious</li>
                <li>• Criminal</li>
                <li>• Malicious</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Villanous:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Villainous</strong> is spelled with an "i" after the double "l".</li>
            <li>• It is an adjective describing wicked or criminal behavior.</li>
            <li>• "Villanous" is never correct in any context.</li>
            <li>• The word comes from "villain" plus the suffix "-ous".</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is "villanous" ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, "villanous" is never correct. The proper spelling is always "villainous".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember "villainous" has an "i" after the double "l".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does villainous mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Villainous means relating to, constituting, or guilty of wicked or criminal behavior.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use "villainous" in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, "villainous" is correct in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell "villainous"?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling "villanous" often happens by omitting the "i" after the double "l".</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Villainous</strong> is the correct spelling, meaning wicked or criminal. The misspelling "villanous" is never correct. Always use "villainous" when describing wicked behavior.</p>
      </div>
    </div>
  )
} 