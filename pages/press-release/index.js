import Head from 'next/head'
import Hero from '@/components/press-release/Hero';
import BodyCopy from '@/components/press-release/BodyCopy';
import Quote from '@/components/press-release/Quote';
import About from '@/components/press-release/About';

export default function PressRelease() {
  return <>
    <Head>
      <title>Press Release</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/logos/logo-temporal-no-copy.svg" />
    </Head>
    <main>
      {/* Hero */}
      <Hero copy={{
        title: 'press release',
        headline: 'Temporal raises $XXX million Series B at a $1.XX billion valuation'
      }}/>

      {/* Body  Copy */}
      <BodyCopy 
        copy={{
          body: 'Seattle, WA - February 14, 2022 - Temporal Technologies Inc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt luctus. Integer euismod ante quis erat feugiat, nec tempor quam hendrerit. Suspendisse tincidunt elit at erat suscipit efficitur. Curabitur vulputate molestie velit ac convallis. Fusce sit amet lorem a ex commodo gravida. Ut auctor ullamcorper velit eu iaculis. Praesent ultrices sem eget iaculis blandit. Duis in luctus metus.  Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id, fermentum ac orci. Integer sit amet malesuada ex. Sed vitae libero dolor. Aenean malesuada vestibulum nisi ac lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque metus eget augue consequat, ac mattis sem volutpat. Phasellus quis laoreet sapien.' 
        }}
        className="pb-20 lg:pb-48"
      />

      {/* Quote */}
      <Quote copy={{
        quote: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt luctus. Integer euismod ante quis erat feugiat, nec tempor quam hendrerit.”' ,
        name: 'Charles Zedlewski',
        title: 'Chief Product Officer Temporal'
      }}/>

      {/* Body Copy */}
      <BodyCopy 
        copy={{
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt luctus. Integer euismod ante quis erat feugiat, nec tempor quam hendrerit. Suspendisse tincidunt elit at erat suscipit efficitur. Curabitur vulputate molestie velit ac convallis. Fusce sit amet lorem a ex commodo gravida. Ut auctor ullamcorper velit eu iaculis. Praesent ultrices sem eget iaculis blandit. Duis in luctus metus.  Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id, fermentum ac orci. Integer sit amet malesuada ex. Sed vitae libero dolor. Aenean malesuada vestibulum nisi ac lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque metus eget augue consequat, ac mattis sem volutpat. Phasellus quis laoreet sapien.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt luctus. Integer euismod ante quis erat feugiat, nec tempor quam hendrerit. Suspendisse tincidunt elit at erat suscipit efficitur. Curabitur vulputate molestie velit ac convallis. Fusce sit amet lorem a ex commodo gravida. Ut auctor ullamcorper velit eu iaculis. Praesent ultrices sem eget iaculis blandit. Duis in luctus metus.  Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id, fermentum ac orci. Integer sit amet malesuada ex. Sed vitae libero dolor. Aenean malesuada vestibulum nisi ac lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque metus eget augue consequat, ac mattis sem volutpat. Phasellus quis laoreet sapien.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt luctus. Integer euismod ante quis erat feugiat, nec tempor quam hendrerit. Suspendisse tincidunt elit at erat suscipit efficitur. Curabitur vulputate molestie velit ac convallis. Fusce sit amet lorem a ex commodo gravida. Ut auctor ullamcorper velit eu iaculis. Praesent ultrices sem eget iaculis blandit. Duis in luctus metus.  Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id, fermentum ac orci. Integer sit amet malesuada ex. Sed vitae libero dolor. Aenean malesuada vestibulum nisi ac lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque metus eget augue consequat, ac mattis sem volutpat. Phasellus quis laoreet sapien.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt luctus. Integer euismod ante quis erat feugiat, nec tempor quam hendrerit. Suspendisse tincidunt elit at erat suscipit efficitur. Curabitur vulputate molestie velit ac convallis. Fusce sit amet lorem a ex commodo gravida. Ut auctor ullamcorper velit eu iaculis. Praesent ultrices sem eget iaculis blandit. Duis in luctus metus.  Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id, fermentum ac orci. Integer sit amet malesuada ex. Sed vitae libero dolor. Aenean malesuada vestibulum nisi ac lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc scelerisque metus eget augue consequat, ac mattis sem volutpat. Phasellus quis laoreet sapien.' 
        }}
        className="pt-20 pb-10 md:pb-20 lg:pt-48"
      />

      {/* About */}
      <About 
        copy={{
          headline: 'About Temporal Technologies Inc.' ,
          body: 'Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id, fermentum ac orci. Integer sit amet malesuada ex. Sed vitae libero dolor. Aenean malesuada vestibulum nisi ac lobortis.  For more information please contact:',
        }}
        contacts={[
          {
            title:'Media Contact',
            name: 'Full Name',
            company: 'Temporal Technologies Inc.',
            email: 'email@temporal.io'
          },
          {
            title:'Investor Contact',
            name: 'Full Name',
            company: 'Investor inc.',
            email: 'email@temporal.io'
          },
        ]}
      />
    </main>
  </>;
}