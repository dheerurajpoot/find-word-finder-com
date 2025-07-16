import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clothes vs Cloths - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "clothes" and "cloths". Discover definitions, usage examples, and common spelling mistakes.',
  keywords: 'clothes vs cloths, correct spelling, spelling comparison, English spelling, word confusion, plural forms',
  openGraph: {
    title: 'Clothes vs Cloths - Which is Correct?',
    description: 'Learn the correct spelling between "clothes" and "cloths". Discover definitions, usage examples, and common spelling mistakes.',
    type: 'website',
  },
}

export default function ClothesVsClothsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Clothes or Cloths</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Understanding the difference between &quot;Clothes&quot; or &quot;Cloths&quot;, these commonly confused words and their meanings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Clothes
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Items worn to cover the body; garments, apparel, or attire.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Noun (plural)
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
            ✅ Correct: Cloths
          </h3>
          <p className="text-lg md:text-xl text-green-800 mb-4">
            <strong>Definition:</strong> Plural of &quot;cloth&quot;; pieces of fabric or material used for cleaning, covering, or other purposes.
          </p>
          <p className="text-lg md:text-xl text-green-800">
            <strong>Part of Speech:</strong> Noun (plural)
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800">
          Both <strong>clothes</strong> and <strong>cloths</strong> are correct spellings, but they have different meanings. &quot;Clothes&quot; refers to garments worn on the body (shirts, pants, dresses, etc.). &quot;Cloths&quot; is the plural of &quot;cloth&quot; and refers to pieces of fabric used for cleaning, covering, or other practical purposes. The key is using the right word for your intended meaning.
        </p>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Clothes&quot; is pronounced as /kloʊðz/ or /kloʊz/</li>
          <li>• &quot;Cloths&quot; is pronounced as /klɔːθs/ or /klɑːθs/</li>
          <li>• &quot;Clothes&quot; is always plural (no singular form)</li>
          <li>• &quot;Cloth&quot; (singular) → &quot;cloths&quot; (plural)</li>
          <li>• &quot;Clothes&quot; comes from Old English &quot;clāþas&quot;</li>
          <li>• Remember: &quot;Clothes&quot; for garments, &quot;cloths&quot; for fabric pieces</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Clothes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Garments</h3>
            <p className="text-lg text-blue-700">Items of clothing or apparel</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Apparel</h3>
            <p className="text-lg text-blue-700">Clothing or attire</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Attire</h3>
            <p className="text-lg text-blue-700">Clothing or dress</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Outfit</h3>
            <p className="text-lg text-blue-700">A set of clothes worn together</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Wardrobe</h3>
            <p className="text-lg text-blue-700">A collection of clothes</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Dress</h3>
            <p className="text-lg text-blue-700">Clothing or garments</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Clothes (garments):</strong> &quot;She packed her <span className="text-green-600 font-semibold">clothes</span> for the trip.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Cloths (fabric pieces):</strong> &quot;He used cleaning <span className="text-green-600 font-semibold">cloths</span> to wipe the table.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Clothes (garments):</strong> &quot;The <span className="text-green-600 font-semibold">clothes</span> in her closet were organized by color.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="text-lg text-gray-800">
              <strong>Cloths (fabric pieces):</strong> &quot;The artist used different <span className="text-green-600 font-semibold">cloths</span> to apply paint.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the difference between &quot;clothes&quot; and &quot;cloths&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: &quot;Clothes&quot; refers to garments worn on the body (shirts, pants, dresses, etc.). &quot;Cloths&quot; is the plural of &quot;cloth&quot; and refers to pieces of fabric used for cleaning, covering, or other practical purposes. They are completely different words with different meanings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Is there a singular form of &quot;clothes&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: No, &quot;clothes&quot; is always plural. There is no singular form. If you want to refer to a single item of clothing, you would use specific words like &quot;shirt,&quot; &quot;pants,&quot; &quot;dress,&quot; etc. The word &quot;clothing&quot; can be used as a collective noun.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: What is the singular form of &quot;cloths&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: The singular form of &quot;cloths&quot; is &quot;cloth.&quot; &quot;Cloth&quot; refers to a piece of fabric or material. For example: &quot;one cloth&quot; vs &quot;many cloths.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: Can &quot;clothes&quot; and &quot;cloths&quot; be used interchangeably?</h3>
            <p className="text-lg text-blue-800">
              A: No, they cannot be used interchangeably. They have completely different meanings. &quot;Clothes&quot; refers to garments worn on the body, while &quot;cloths&quot; refers to pieces of fabric used for practical purposes like cleaning or covering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Q: How can I remember the difference between &quot;clothes&quot; and &quot;cloths&quot;?</h3>
            <p className="text-lg text-blue-800">
              A: Think of &quot;clothes&quot; as what you wear on your body (garments). Think of &quot;cloths&quot; as pieces of fabric you use for cleaning or other practical purposes. Remember: &quot;clothes&quot; = garments, &quot;cloths&quot; = fabric pieces.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 