"use client";
import React from "react";
import Link from 'next/link';

export default function FigurativeLanguagePage() {
  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800">Figurative Language</h1>
            <p className="text-lg text-gray-700">
              Figurative language uses words in a way that differs from their literal meaning to create vivid imagery, convey emotions, and make writing more engaging.
            </p>
            <p className="text-sm text-indigo-600 font-medium">
              Key Takeaway: Figurative language makes writing more colorful, expressive, and memorable.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              What is Figurative Language?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Figurative language is a way of using words that goes beyond their literal meaning to create special effects, 
              vivid imagery, and deeper understanding. It helps writers express ideas in creative and memorable ways.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Common Types of Figurative Language:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Simile (comparison using &quot;like&quot; or &quot;as&quot;)</li>
                <li>Metaphor (direct comparison)</li>
                <li>Personification (giving human qualities to non-human things)</li>
                <li>Hyperbole (exaggeration)</li>
                <li>Alliteration (repetition of initial sounds)</li>
                <li>Onomatopoeia (words that imitate sounds)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Simile Examples
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">What is a Simile?</h3>
              <p className="text-gray-700 mb-4">
                A simile compares two different things using &quot;like&quot; or &quot;as&quot; to create a vivid image in the reader&apos;s mind.
              </p>
              
              <h4 className="font-semibold text-blue-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;Her smile was <strong>like</strong> sunshine on a cloudy day.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;He ran <strong>as</strong> fast <strong>as</strong> a cheetah.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;The water was <strong>like</strong> glass, smooth and clear.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;She was <strong>as</strong> brave <strong>as</strong> a lion.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-gray-800">&quot;His voice was <strong>like</strong> thunder in the quiet room.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Metaphor Examples
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">What is a Metaphor?</h3>
              <p className="text-gray-700 mb-4">
                A metaphor directly compares two things without using &quot;like&quot; or &quot;as,&quot; suggesting that one thing is another.
              </p>
              
              <h4 className="font-semibold text-green-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;Life is a <strong>journey</strong> with many twists and turns.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;The classroom was a <strong>zoo</strong> during recess.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;Her eyes were <strong>diamonds</strong> sparkling in the light.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;Time is <strong>money</strong>.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-gray-800">&quot;The world is a <strong>stage</strong>.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Personification Examples
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">What is Personification?</h3>
              <p className="text-gray-700 mb-4">
                Personification gives human qualities, emotions, or actions to non-human things like animals, objects, or ideas.
              </p>
              
              <h4 className="font-semibold text-yellow-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;The wind <strong>whispered</strong> through the trees.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;The sun <strong>smiled</strong> down on the beach.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;The flowers <strong>danced</strong> in the breeze.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;The car <strong>groaned</strong> as it climbed the hill.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-800">&quot;Fear <strong>gripped</strong> her heart.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Hyperbole Examples
            </h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">What is Hyperbole?</h3>
              <p className="text-gray-700 mb-4">
                Hyperbole is an extreme exaggeration used for emphasis or dramatic effect. It&apos;s not meant to be taken literally.
              </p>
              
              <h4 className="font-semibold text-red-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;I&apos;ve told you a <strong>million times</strong> to clean your room!&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;This backpack weighs a <strong>ton</strong>!&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;I&apos;m so hungry I could eat a <strong>horse</strong>.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;She&apos;s been waiting here for <strong>ages</strong>.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-gray-800">&quot;I have a <strong>mountain</strong> of homework to do.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Alliteration Examples
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">What is Alliteration?</h3>
              <p className="text-gray-700 mb-4">
                Alliteration is the repetition of the same initial consonant sound in nearby words to create rhythm and musicality.
              </p>
              
              <h4 className="font-semibold text-purple-800 mb-2">Examples:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800">&quot;<strong>P</strong>eter <strong>P</strong>iper <strong>p</strong>icked a <strong>p</strong>eck of <strong>p</strong>ickled <strong>p</strong>eppers.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800">&quot;The <strong>s</strong>ilent <strong>s</strong>now <strong>s</strong>ettled <strong>s</strong>oftly.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800">&quot;<strong>B</strong>ig <strong>b</strong>rown <strong>b</strong>ears <strong>b</strong>ounce <strong>b</strong>alls.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800">&quot;<strong>S</strong>ally <strong>s</strong>ells <strong>s</strong>ea<strong>s</strong>hells by the <strong>s</strong>ea<strong>s</strong>hore.&quot;</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-gray-800">&quot;The <strong>w</strong>ind <strong>w</strong>histled through the <strong>w</strong>illow trees.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Worksheet: Identify Figurative Language
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-700">Identify the type of figurative language used in each sentence:</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">1. &quot;The stars winked at me from the night sky.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Personification</strong> - stars are given the human action of winking</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">2. &quot;She is as busy as a bee.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Simile</strong> - uses &quot;as&quot; to compare her to a bee</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">3. &quot;The classroom was a zoo during lunch break.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Metaphor</strong> - directly compares classroom to a zoo</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">4. &quot;I&apos;ve been waiting here for a million years!&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Hyperbole</strong> - extreme exaggeration for effect</p>
                  </details>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium text-gray-800 mb-2">5. &quot;The big brown bear bounced the ball.&quot;</p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium">
                      Show Answer
                    </summary>
                    <p className="mt-2 text-gray-700">Answer: <strong>Alliteration</strong> - repetition of the &quot;b&quot; sound</p>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              Tips for Using Figurative Language
            </h2>
            <div className="bg-indigo-50 p-6 rounded-lg space-y-4">
              <div className="flex items-start space-x-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h3 className="font-semibold text-indigo-800">Use it sparingly</h3>
                  <p className="text-gray-700">Too much figurative language can make writing confusing. Use it to enhance, not overwhelm.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h3 className="font-semibold text-indigo-800">Make it relevant</h3>
                  <p className="text-gray-700">Choose comparisons and images that fit your topic and help readers understand your meaning.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h3 className="font-semibold text-indigo-800">Consider your audience</h3>
                  <p className="text-gray-700">Use figurative language that your readers will understand and appreciate.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                <div>
                  <h3 className="font-semibold text-indigo-800">Read and practice</h3>
                  <p className="text-gray-700">Read examples of good figurative language and practice writing your own to improve your skills.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-2">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/grammar/metaphor-examples" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Metaphor Examples</h3>
                <p className="text-gray-700 text-sm">Explore more examples of metaphors in literature.</p>
              </Link>
              
              <Link href="/grammar/simile-examples" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="font-semibold text-green-800">Simile Examples</h3>
                <p className="text-gray-700 text-sm">Discover creative simile examples for better writing.</p>
              </Link>
              
              <Link href="/grammar/personification-examples-for-kids" className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="font-semibold text-yellow-800">Personification Examples</h3>
                <p className="text-gray-700 text-sm">Learn how to give human qualities to objects and animals.</p>
              </Link>
              
              <Link href="/grammar/alliteration-examples" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <h3 className="font-semibold text-red-800">Alliteration Examples</h3>
                <p className="text-gray-700 text-sm">Master the art of sound repetition in writing.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 