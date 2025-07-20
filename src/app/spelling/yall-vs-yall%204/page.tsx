import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Yall or Yall 4 - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;yall&quot; and &quot;yall 4&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function YallVsYall4Page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Yall or Yall 4</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;yall&quot; or &quot;yall 4&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Yall 4</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - &quot;Yall 4&quot; is not a recognized English word or phrase.
            </p>
            <p className="text-lg md:text-xl text-red-700">
                &quot;Yall 4&quot; is not a standard spelling or usage. The correct informal contraction for &quot;you all&quot; is &quot;yall&quot; or &quot;y&apos;all&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Yall</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The informal contraction for &quot;you all&quot; commonly used in Southern American English.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Yall&quot; (or more properly &quot;y&apos;all&quot;) is a colloquial contraction meaning &quot;you all&quot; and is widely used in informal speech.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Yall</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Yall&quot;</strong> (informal contraction): A colloquial contraction of &quot;you all,&quot; used to address or refer to two or more people.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word is used in informal speech, especially in the Southern United States, to address a group of people.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Yall</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• You all</li>
                <li>• You guys</li>
                <li>• You lot</li>
                <li>• All of you</li>
                <li>• Everyone</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Folks</li>
                <li>• Everybody</li>
                <li>• Group</li>
                <li>• Team</li>
                <li>• People</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;<span className="text-green-600 font-semibold">Yall</span> ready to go?&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;<span className="text-red-600 font-semibold">Yall 4</span> ready to go?&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;How are yall doing today?&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Yall&quot; is a colloquial contraction, more properly spelled &quot;y&apos;all&quot; with an apostrophe.</li>
          <li>• The pronunciation is /jɑːl/ (yahl).</li>
          <li>• Commonly used in the Southern United States and informal speech.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;yall 4&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;yall 4&quot; is never correct. The only correct form is &quot;yall&quot; or &quot;y&apos;all&quot; as a contraction for &quot;you all&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;yall&quot; proper English?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Yall&quot; is informal and regional, but widely understood and used in American English.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What is the origin of &quot;yall&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Yall&quot; originated in the Southern United States as a contraction of &quot;you all&quot;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can &quot;yall&quot; be used in writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, but it is best suited for informal writing, dialogue, or regional flavor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some common phrases with &quot;yall&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples: &quot;How are yall?&quot;, &quot;Yall come back now&quot;, &quot;See yall later&quot;.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Yall</strong> is the correct informal contraction for &quot;you all&quot;, while <strong>yall 4</strong> is always incorrect. Use &quot;yall&quot; or &quot;y&apos;all&quot; in informal speech to address a group of people.
        </p>
      </div>
    </div>
  )
} 