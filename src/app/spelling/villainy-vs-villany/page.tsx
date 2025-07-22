import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Villainy or Villany - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "villainy" and "villany". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VillainyVsVillanyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Villainy or Villany</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between "villainy" and "villany"? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Villany</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">"Villany" is a misspelling. The correct spelling is "villainy" with an "i" after the double "l".</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Villainy</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">"Villainy" is the correct spelling. It means wicked or criminal behavior.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Villainy (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Wicked or criminal behavior; actions characteristic of a villain.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The story is full of <strong>villainy</strong> and betrayal.</li>
                  <li>• He was punished for his <strong>villainy</strong>.</li>
                  <li>• The <strong>villainy</strong> of the antagonist shocked the audience.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Villany (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">"Villany" is a misspelling of "villainy" and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• "Villany" is not used in standard English.</li>
                  <li>• Always use <strong>villainy</strong> when referring to wicked behavior.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Villainy:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Wickedness</li>
                <li>• Evil</li>
                <li>• Depravity</li>
                <li>• Atrocity</li>
                <li>• Crime</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Villany:</h4>
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
            <li>• <strong>Villainy</strong> is spelled with an "i" after the double "l".</li>
            <li>• It is a noun describing wicked or criminal behavior.</li>
            <li>• "Villany" is never correct in any context.</li>
            <li>• The word comes from "villain" plus the suffix "-y".</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is "villany" ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, "villany" is never correct. The proper spelling is always "villainy".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember "villainy" has an "i" after the double "l".</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does villainy mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Villainy means wicked or criminal behavior.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can I use "villainy" in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, "villainy" is correct in all contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell "villainy"?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling "villany" often happens by omitting the "i" after the double "l".</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Villainy</strong> is the correct spelling, meaning wicked or criminal behavior. The misspelling "villany" is never correct. Always use "villainy" when referring to wickedness.</p>
      </div>
    </div>
  )
} 